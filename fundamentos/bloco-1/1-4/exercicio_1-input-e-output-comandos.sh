# 1 Navegue até a pasta unix_tests ;
cd unix_tests

# 2 Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet , Unix e Bash , um em cada linha.
touch skills2.txt
cat >> skills2.txt

# 3 Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 🤓
cat >> skills2.txt
sort skills2.txt

# 4 Conte quantas linhas tem o arquivo skills2.txt .
wc -l skills2.txt

# 5 Crie um arquivo chamado top_skills.txt usando o skills2.txt , contendo as 3 primeiras skills em ordem alfabética.
head -3 skills2.txt | sort > top_skills.txt

# 6 Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha.
touch phrases2

# 7 Conte o número de linhas que contêm as letras br .
grep -i 'br' phrases2.txt | wc -l

# 8 Conte o número de linhas que não contêm as letras br .
grep -iv 'br' phrases2.txt | wc -l

# 9 Adicione dois nomes de países ao final do arquivo phrases2.txt .
cat >> phrases2.txt

# 10 Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt
cat phrases2.txt countries.txt > bunch_of_things.txt

# 11 Ordene o arquivo bunch_of_things.txt .
sort -o bunch_of_things.txt bunch_of_things.txt
