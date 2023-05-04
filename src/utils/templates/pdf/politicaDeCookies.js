export function politicaDeCookies(company , cookies, email){

    const cookiesPolicy = {
        content: [
            {
              text: 'Política de Cookies',
              style: 'header'
            },
            {
              text: '\n\n'
            },
            {
              text: '1. Introdução',
              style: 'subheader'
            },
            {
              text: '\n\n'
            },
            {
              text: `O  site da empresa ${ company } utiliza cookies para oferecer a melhor experiência ao usuário. Ao navegar neste site, você concorda com o uso de cookies de acordo com esta política.`,
              style: 'paragraph'
            },
            {
              text: '\n\n'
            },
            {
              text: '2. O que são cookies?',
              style: 'subheader'
            },
            {
              text: '\n\n'
            },
            {
              text: 'Cookies são arquivos de texto que são armazenados no seu computador ou dispositivo móvel quando você visita um site. Eles são amplamente utilizados para fazer com que os sites funcionem, ou funcionem de forma mais eficiente, bem como para fornecer informações aos proprietários do site.',
              style: 'paragraph'
            },
            {
              text: '\n\n'
            },
            {
              text: '3. Como usamos os cookies',
              style: 'subheader'
            },
            {
              text: '\n\n'
            },
            {
              text: 'Utilizamos cookies para personalizar conteúdo e anúncios, fornecer recursos de mídia social e analisar nosso tráfego. Também compartilhamos informações sobre o uso do nosso site com nossos parceiros de mídia social, publicidade e análise, que podem combiná-las com outras informações que você forneceu a eles ou que eles coletaram do uso de seus serviços.',
              style: 'paragraph'
            },
            {
              text: '\n\n'
            },
            {
              text: '4. Tipos de cookies que usamos',
              style: 'subheader'
            },
            {
              text: '\n\n'
            },
            {
              text: 'Os cookies que usamos podem ser divididos em várias categorias:',
              style: 'paragraph'
            },
            {
              ul: cookies,
                style: 'paragraph'
                },
                {
                text: '\n\n'
                },
                {
                text: '5. Como controlar os cookies',
                style: 'subheader'
                },
                {
                text: '\n\n'
                },
                {
                text: 'Você pode controlar e/ou excluir cookies a qualquer momento. Para mais informações, consulte aboutcookies.org. Você pode excluir todos os cookies já armazenados em seu computador e configurar a maioria dos navegadores para bloqueá-los. No entanto, se você fizer isso, pode ser necessário ajustar manualmente algumas preferências sempre que visitar um site e alguns serviços e funcionalidades podem não funcionar corretamente.',
                style: 'paragraph'
                },
                {
                text: '\n\n'
                },
                {
                text: '6. Alterações na política de cookies',
                style: 'subheader'
                },
                {
                text: '\n\n'
                },
                {
                text: 'Podemos atualizar esta política de cookies periodicamente para refletir, por exemplo, alterações nos cookies que usamos ou por outras razões operacionais, legais ou regulatórias. Portanto, verifique esta página regularmente para garantir que você esteja ciente de quaisquer mudanças.',
                style: 'paragraph'
                },
                {
                text: '\n\n'
                },
                {
                text: '7. Contato',
                style: 'subheader'
                },
                {
                text: '\n\n'
                },
                {
                text: `Se você tiver alguma dúvida sobre nossa política de cookies, entre em contato conosco por e-mail em ${email}.`,
                style: 'paragraph'
                }
                ],
                styles: {
                header: {
                fontSize: 24,
                bold: true
                },
                subheader: {
                fontSize: 18,
                bold: true
                },
                paragraph: {
                fontSize: 12,
                alignment: 'justify'
                }
                }
                };
    return cookiesPolicy;
}
  