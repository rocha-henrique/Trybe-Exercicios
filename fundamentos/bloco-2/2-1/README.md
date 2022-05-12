# Git e Github

Aprendi os principais comandos git e como utilizar o github em conjunto

## Comandos:

### Clonar um repositório remoto para o seu PC.

```sh
git clone <url-do-repositorio>
```

### Atualizar o repositório local com as branches que estão no remoto sem modificar os arquivos locais.

```sh
git fetch
```

### Lista todas as branchs do seu repositório local.

```sh
git branch
```

### Criar uma nova branch a partir da branch atual e já muda para ela.

```sh
git checkout -b <nome-da-branch>
```

### Muda da branch atual para outra branch especificando o nome. Pode alternar entre branches.

```sh
git checkout <nome-da-branch>
```

### Fornece informações sobre a branch e arquivos modificados.

```sh
git status
```

### Criar uma mensagem especificando as alterações realizadas e atualiza o histórico de versões.

```sh
git commit -m "msg"
```

### Inclui alterações de arquivos no próximo commit.

```sh
# adicionar todos arquivos modificados
git add .
# adicionar um arquivo especificado
git add <arquivo>
```

### Enviar e salvar sua branch local no repositório remoto

```sh
git push
```

### Atualiza e traz modificações do repositório remoto para o repositório local.

```sh
git pull
```
