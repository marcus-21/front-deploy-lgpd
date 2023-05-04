export function termosDeUso( description , email , company){
    const termsOfUse = {
        content: [
            { text: 'Termos de Uso', style: 'header' },
            { text: 'Introdução', style: 'subheader' },
            { text: `Bem-vindo aos termos de uso da ${ company }! Ao usar nossos serviços, você concorda com os termos e condições descritos abaixo. Por favor, leia com atenção.` },
            { text: 'Serviços', style: 'subheader' },
            { text: `Nosso serviço permite que você: ${ description }` },
            { text: 'Conta', style: 'subheader' },
            { text: 'Para usar nossos serviços, você precisa criar uma conta. Ao criar uma conta, você concorda em fornecer informações precisas e completas e mantê-las atualizadas. Você é responsável por manter a segurança da sua conta e senha.' },
            { text: 'Uso do serviço', style: 'subheader' },
            { text: 'Você concorda em usar nossos serviços apenas para fins legais e de acordo com nossos termos de uso. Você não pode usar nossos serviços de maneira que prejudique os direitos de terceiros, incluindo seus direitos de propriedade intelectual, privacidade e reputação.' },
            { text: 'Alterações nos termos de uso', style: 'subheader' },
            { text: 'Podemos atualizar ou alterar nossos termos de uso a qualquer momento. Se fizermos alterações, notificaremos você por email ou por meio de uma notificação em nossos serviços. Seu uso contínuo de nossos serviços após as alterações significa que você concorda com os termos atualizados.' },
            { text: 'Encerramento da conta', style: 'subheader' },
            { text: 'Você pode encerrar sua conta a qualquer momento. Se você encerrar sua conta, não terá mais acesso aos nossos serviços e seus dados serão excluídos. Reservamos o direito de encerrar sua conta se você violar nossos termos de uso.' },
            { text: 'Limitação de responsabilidade', style: 'subheader' },
            { text: 'Não seremos responsáveis por danos indiretos, especiais, incidentais, consequenciais ou punitivos, incluindo perda de lucro ou receita, que possam surgir do uso ou incapacidade de usar nossos serviços.' },
            { text: 'Lei aplicável', style: 'subheader' },
            { text: 'Nossos termos de uso serão regidos e interpretados de acordo com as leis do Brasil.' },
            { text: 'Contato', style: 'subheader' },
            { text: `Se você tiver alguma dúvida ou sugestão sobre nossos termos de uso, entre em contato conosco através do email ${email}.` }
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                margin: [0, 0, 0, 10]
            },
            subheader: {
                fontSize: 14,
                bold: true,
                margin: [0, 0, 0, 5]
            }
        }
    };
    return termsOfUse;
}