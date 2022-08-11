import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import Styles from './styles.module.css'

export const Overview = () => {
  // drop box dnd
  // resolver os drops e desenvolver uma logica para mostrar um estado ou o segundo estado
  // if else simples
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div className={Styles.container}>
      <p> teste</p>
    </div>
  )
}

// concentrar o dnd em um componente separado e tentar centralizar as duas entidades neste arquivo
// state leafting
// 1 dnd
// 2 edit
// 3 esse componente será o master dos outros dois.
