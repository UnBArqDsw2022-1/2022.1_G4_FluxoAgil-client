# Ambiente de desenvolvimento
<!--
> Nesse arquivo deve ter informações adicionais para o preparo do ambiente
> de desenvolvimento
>
> - Como configurar Husky
>
> - Como configurar Docker (se tiver) -->

Esse projeto utiliza algumas ferramentas para facilitar o desenvolvimento. Se
você usa o VSCode como editor, instale as seguintes extensões:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

E certifique-se que elas estão habilitadas no seu projeto.

Pode ser útil que as seguintes configurações estejam habilitadas, no `settings.json` do vscode:

```json
"[typescriptreact]": {
  "editor.defaultFormatter": "vscode.typescript-language-features",
},
"[typescript]": {
  "editor.defaultFormatter": "vscode.typescript-language-features",
},
```

Após isso reiniciar o vscode para as alterações serem aplicadas.
