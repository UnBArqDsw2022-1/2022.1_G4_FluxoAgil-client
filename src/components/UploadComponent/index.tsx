import {
  Grid,
  Container,
  ThemeProvider,
  Typography,
  Link,
  Box,
} from '@mui/material';
import React, { createRef, useState, RefObject, useEffect } from 'react';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { FileCopy } from '@mui/icons-material';
// eslint-disable-next-line import/no-unresolved
import ButtonComponent from 'components/ButtonComponent';

const acceptedTypes = ['.pdf'];

interface UploadComponentProps {
  onFileSelected: undefined | ((file: File | null) => void);
}

export default function UploadComponent({
  onFileSelected,
}: UploadComponentProps) {
  const [message, setMessage] = useState({
    type: null,
    text: null,
  } as { type: string | null; text: string | null });
  const [fileHovering, setFileHovering] = useState(false);
  const fileInputRef: RefObject<HTMLInputElement> = createRef();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    if (selectedFile !== null) {
      if (onFileSelected) {
        onFileSelected(selectedFile);
      }
    }
  }, [selectedFile]);

  function clearMessage() {
    setMessage({ type: null, text: null });
  }

  function handleInputSelectFile(e: any) {
    if (e.target.files.length < 1) {
      setSelectedFile(e.target.files[0]);
    }
  }

  const handleDragStart = (ev: any) => {
    ev.preventDefault();
    clearMessage();
    setSelectedFile(null);
    setFileHovering(true);

    const files = [];

    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (let i = 0; i < ev.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (ev.dataTransfer.items[i].kind === 'file') {
          const file = ev.dataTransfer.items[i];
          if (file) files.push(file);
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (let i = 0; i < ev.dataTransfer.files.length; i++) {
        files.push(ev.dataTransfer.files[i]);
      }
    }

    if (files.length < 1) {
      setMessage({ type: 'erro', text: 'Falha ao obter o arquivo' });
    }
    const itemType = files[0].type;

    if (itemType && !acceptedTypes.includes(itemType)) {
      setMessage({
        type: 'error',
        text: 'Tipo de arquivo não suportado. Selecione um docx válido.',
      });
    }
  };

  const handleDragExit = (e: any) => {
    setFileHovering(false);
    e.preventDefault();
    clearMessage();
  };

  const handleDragAreaClick = () => {
    fileInputRef!.current!.click();
  };

  const handleDropCapture = (ev: any) => {
    setFileHovering(false);
    ev.preventDefault();

    const files = [];

    if (ev.dataTransfer.items) {
      for (let i = 0; i < ev.dataTransfer.items.length; i++) {
        if (ev.dataTransfer.items[i].kind === 'file') {
          const file = ev.dataTransfer.items[i];
          files.push(file);
        }
      }
    } else {
      for (let i = 0; i < ev.dataTransfer.files.length; i++) {
        const file = ev.dataTransfer.files[i];
        files.push(file);
      }
    }

    if (files.length < 1) {
      setMessage({
        type: 'error',
        text: 'Falha ao obter arquivo',
      });
    }

    const itemType = files[0].type;
    if (itemType && !acceptedTypes.includes(itemType)) {
      setMessage({
        type: 'error',
        text: 'Tipo de arquivo não suportado. Selecione um docx válido.',
      });
    }

    let f = files[0];

    if (typeof f.getAsFile === 'function') f = f.getAsFile();

    if (!(f instanceof File)) {
      setMessage({
        type: 'error',
        text: 'Falha ao obter arquivo',
      });
    }
    setSelectedFile(f);
  };

  return (
    <ThemeProvider theme={}>
      <Container component="main">
        <Grid
          container
          spacing={3}
          direction="column"
          alignItems="center"
          justifyContent="center"
          borderRadius={2}
          style={{
            background: fileHovering ? '#f5f5f5' : '#fff',
            opacity: fileHovering ? 0.8 : 1,
          }}
          sx={{
            width: 'calc(min(320px, 95%))',
            minHeight: '200px',
            padding: {
              xs: 0,
              sm: '1px',
            },
          }}
          onDragOver={handleDragStart}
          onDragExit={handleDragExit}
          onDrop={handleDropCapture}
          onClick={handleDragAreaClick}
        >
          {!selectedFile && (
            <>
              {!fileHovering && (
                <Grid item xs={12}>
                  <ButtonComponent
                    hasIcon
                    icon={<FileUploadIcon />}
                    label="Enviar Histórico"
                    onClick={() => {}}
                    variant="contained"
                  />
                  <Typography variant="body1">
                    ou
                    <Link href="selectCourses">
                      {' '}
                      Selecione suas matérias manualmente.
                    </Link>
                  </Typography>
                </Grid>
              )}
              {fileHovering && (message.text ? message.text : <FileCopy />)}
            </>
          )}
        </Grid>
        <Box display="none">
          <form>
            <input
              ref={fileInputRef}
              type="file"
              accept={acceptedTypes.join(',')}
              onChange={handleInputSelectFile}
            />
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
