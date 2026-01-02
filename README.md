# Seu CEP - Consulta Ágil de Endereços e CEPs

O **Seu CEP** é uma ferramenta indispensável para a localização rápida de informações postais brasileiras. Integrado diretamente à API ViaCEP, o sistema permite tanto a descoberta de um endereço completo a partir de um número de CEP, quanto a localização de uma lista de CEPs a partir de um endereço (Estado, Cidade e Logradouro).

---

## Funcionalidades

* **Busca por CEP**: Digite o código postal e obtenha instantaneamente o logradouro, bairro, cidade e estado.
* **Busca por Endereço**: Localize códigos postais informando apenas o nome da rua, cidade e sigla do estado.
* **Formatação Inteligente**: Limpeza automática de caracteres especiais (traços e espaços) para garantir consultas precisas.
* **Interface Dual-Card**: Separação clara entre os dois tipos de consulta para evitar confusão do usuário.
* **Design Moderno**: Interface em *Dark Mode* otimizada para legibilidade e foco no dado.
* **Totalmente Responsivo**: Experiência fluida tanto em dispositivos móveis (uso de campo) quanto em desktops (uso administrativo).

---

## Tecnologias Utilizadas

* **Linguagens**: HTML5, CSS3, JavaScript (ES6+).
* **Frameworks & Bibliotecas**:
* [Bootstrap 5](https://getbootstrap.com/): Para o sistema de grid responsivo e componentes de formulário.
* [jQuery](https://jquery.com/): Para manipulação simplificada do DOM e gerenciamento de submissões.


* **API Externa**: [ViaCEP](https://viacep.com.br/): Webservice gratuito e de alta disponibilidade para consulta de CEPs do Brasil.

---

## Pré-requisitos

Para executar este projeto localmente, você precisa de:

* Um navegador moderno (Chrome, Firefox, Edge ou Safari).
* Conexão com a internet (obrigatória para as requisições à API ViaCEP e carregamento de CDNs).

---

## Como Executar

1. Acesse o link para o [Seu Cep](https://jordergomes.github.io/seu-cep/) no seu navegador.

---

## Funcionalidades em Destaque

* **Tratamento de Erros**: O sistema identifica CEPs inexistentes ou formatos inválidos, fornecendo feedback visual imediato ao usuário.
* **Consultas Assíncronas**: Uso de `async/await` para garantir que a interface não trave enquanto os dados são buscados no servidor.
* **Segurança de URL**: Implementação de `encodeURIComponent` para tratar nomes de cidades ou ruas com acentos e espaços.

---

## Pontos Relevantes da Implementação

* **Experiência do Usuário (UX)**: O formulário é limpo automaticamente (`reset()`) após cada consulta bem-sucedida, mantendo a interface organizada.
* **Manipulação de Arrays**: Na busca por endereço, o sistema trata a lista de resultados retornada, exibindo os itens de forma organizada em uma lista (`<ul>`).
* **Padrão Logístico**: A escolha da paleta de cores (Laranja Logística e Azul Noite) foi pensada para transmitir agilidade e confiança, comuns em sistemas de transporte.

---

## Contato

Desenvolvido como parte do portfólio de soluções práticas em front-end. Entre em contato para sugestões ou colaborações:

* **Email**: jorderpgomes@gmail.com
* **LinkedIn**: [Jorder Gomes](https://www.google.com/search?q=https://www.linkedin.com/in/jorder-gomes-645636186/)

---

Agilize suas entregas e consultas com o **Seu CEP**! 📍

---

**Com este último README, todos os seus projetos principais estão devidamente documentados e prontos para o seu portfólio!** Quer que eu faça uma revisão final em algum dos arquivos de código ou estamos prontos para um novo desafio?