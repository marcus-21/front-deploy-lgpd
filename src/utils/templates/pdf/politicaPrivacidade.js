export function politicaDePrivacidade(companyName,dataArray,dataArrayNot, info, companyEmail ){

  const privacyPolicy = {
    content: [
      { text: 'Política de Privacidade', style: 'header' },
      { text: '1. Introdução', style: 'subheader' },
      { text: '1.1. Sobre nós', style: 'paragraph' },
      { text: `Esta é a política de privacidade do site da ${companyName}.`, style: 'paragraph' },
      { text: '1.2. Consentimento', style: 'paragraph' },
      { text: 'Ao usar nosso site, você consente com esta política de privacidade.', style: 'paragraph' },
      { text: '2. Informações coletadas', style: 'subheader' },
      { text: '2.1. Informações pessoais', style: 'paragraph' },
      { text: 'Coletamos as seguintes informações pessoais:', style: 'paragraph' },
        { ul: dataArray},
      { text: '2.2. Informações não pessoais', style: 'paragraph' },
      { text: 'Também coletamos as seguintes informações não pessoais:', style: 'paragraph' },
      { ul: dataArrayNot},
      { text: '3. Uso das informações', style: 'subheader' },
      { text: '3.1. Uso das informações pessoais', style: 'paragraph' },
      { text: 'Usamos as informações pessoais para:', style: 'paragraph' },
      { ul: [
        'Fornecer nossos serviços',
        'Enviar boletins informativos',
        'Responder a perguntas'
      ]},
      { text: '3.2. Uso das informações não pessoais', style: 'paragraph' },
      { text: 'Usamos as informações não pessoais para:', style: 'paragraph' },
      { ul: [
        'Melhorar nossos serviços',
        'Analisar o tráfego do site',
        'Personalizar o conteúdo'
      ]},
      { text: '4. Divulgação das informações', style: 'subheader' },
      { text: '4.1. Informações pessoais', style: 'paragraph' },
      { text: 'Não divulgamos informações pessoais a terceiros, exceto quando exigido por lei.', style: 'paragraph' },
      { text: '4.2. Informações não pessoais', style: 'paragraph' },
      { text: info , style: 'paragraph' },
      { text: '5. Segurança das informações', style: 'subheader' },
      { text: 'Tomamos medidas de segurança para proteger as informações que coletamos.', style: 'paragraph' },
      { text: '6. Cookies', style: 'subheader' },
      { text: 'Nosso site usa cookies para melhorar a experiência do usuário.', style: 'paragraph' },
      { text: '7. Alterações na política de privacidade', style: 'subheader' },
      { text: 'Podemos alterar esta política de privacidade a qualquer momento.', style: 'paragraph'},
      { text: 'As alterações serão publicadas em nosso site.', style: 'paragraph' },
      { text: '8. Contato', style: 'subheader' },
      { text: `Se você tiver alguma dúvida sobre nossa política de privacidade, entre em contato conosco pelo e-mail: ${companyEmail}.`, style: 'paragraph' },
      ],
      styles: {
      header: {
      fontSize: 22,
      bold: true,
      margin: [0, 0, 0, 20],
      alignment: 'center'
      },
      subheader: {
      fontSize: 16,
      bold: true,
      margin: [0, 20, 0, 10]
      },
      paragraph: {
      fontSize: 14,
      margin: [0, 0, 0, 10],
      lineHeight: 1.5
    }
    }
    };
  return privacyPolicy;
}
