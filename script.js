document.addEventListener('DOMContentLoaded', function () {
    // Array de depoimentos
    const testimonials = [
        {
            text: "Estou muito satisfeito com os serviços prestados. Equipe altamente profissional!",
            author: "João Silva"
        },
        {
            text: "Entrega rápida e eficiente. Recomendo a todos!",
            author: "Maria Oliveira"
        },
        {
            text: "Produto de excelente qualidade. Superou minhas expectativas.",
            author: "Carlos Santos"
        }
    ];

    // Função para exibir depoimentos na página
    function displayTestimonials() {
        const testimonialContainer = document.getElementById('testimonialContainer');

        // Limpar conteúdo existente
        testimonialContainer.innerHTML = '';

        // Adicionar depoimentos dinamicamente
        testimonials.forEach(testimonial => {
            const testimonialDiv = document.createElement('div');
            testimonialDiv.classList.add('testimonial');

            const textParagraph = document.createElement('p');
            textParagraph.textContent = testimonial.text;

            const authorParagraph = document.createElement('p');
            authorParagraph.classList.add('testimonial-author');
            authorParagraph.textContent = `- ${testimonial.author}`;

            testimonialDiv.appendChild(textParagraph);
            testimonialDiv.appendChild(authorParagraph);

            testimonialContainer.appendChild(testimonialDiv);
        });
    }

    // Chamar a função para exibir depoimentos ao carregar a página
    displayTestimonials();
});
