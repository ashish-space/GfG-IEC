// Auto-scroll for horizontal grids
function initAutoScroll() {
    const scrollContainers = document.querySelectorAll('.ongoing-scroll');

    scrollContainers.forEach(container => {
        if (!container || container.children.length === 0) return;

        let scrollInterval;
        let isPaused = false;
        let scrollPosition = 0;

        const startAutoScroll = () => {
            if (scrollInterval) clearInterval(scrollInterval);

            scrollInterval = setInterval(() => {
                if (isPaused) return;

                const maxScroll = container.scrollWidth - container.clientWidth;

                // Increment scroll position by 1px for smooth scrolling
                scrollPosition += 1;

                // Reset to start when reaching the end
                if (scrollPosition >= maxScroll) {
                    scrollPosition = 0;
                }

                container.scrollLeft = scrollPosition;
            }, 30); // 30ms interval for smooth scrolling
        };

        const stopAutoScroll = () => {
            if (scrollInterval) {
                clearInterval(scrollInterval);
                scrollInterval = null;
            }
        };

        // Pause on hover
        container.addEventListener('mouseenter', () => {
            isPaused = true;
        });

        container.addEventListener('mouseleave', () => {
            isPaused = false;
        });

        // Pause on touch/manual scroll
        container.addEventListener('touchstart', () => {
            isPaused = true;
        });

        container.addEventListener('touchend', () => {
            setTimeout(() => {
                isPaused = false;
            }, 3000);
        });

        // Sync scroll position when user manually scrolls
        container.addEventListener('scroll', () => {
            if (!isPaused) {
                scrollPosition = container.scrollLeft;
            }
        }, { passive: true });

        // Start auto-scroll immediately
        startAutoScroll();
    });
}

// Partnership/Sponsorship Email
window.openPartnershipEmail = () => {
    const subject = encodeURIComponent('Partnership Opportunity with GFG IEC Chapter');
    const body = encodeURIComponent(`Dear GFG IEC Team,

I am interested in exploring partnership opportunities with the GeeksforGeeks IEC Chapter.

Organization Name: [Your Organization]
Contact Person: [Your Name]
Contact Email: [Your Email]
Contact Phone: [Your Phone]

Proposed Partnership Type:
[ ] Event Sponsorship
[ ] Technical Collaboration
[ ] Resource Partnership
[ ] Other (Please specify)

Brief Description:
[Please describe your partnership proposal]

Looking forward to collaborating with you.

Best regards,
[Your Name]`);

    window.location.href = `mailto:gfg.iecce@gmail.com,prakhar.btech2024@ieccollege.com?subject=${subject}&body=${body}`;
};

window.openSponsorshipEmail = () => {
    const subject = encodeURIComponent('Sponsorship Inquiry for GFG IEC Chapter');
    const body = encodeURIComponent(`Dear GFG IEC Team,

I would like to inquire about sponsorship opportunities for the GeeksforGeeks IEC Chapter.

Company/Organization: [Your Company]
Contact Person: [Your Name]
Contact Email: [Your Email]
Contact Phone: [Your Phone]

Sponsorship Interest:
[ ] Event Sponsorship
[ ] Annual Sponsorship
[ ] Specific Initiative
[ ] Other (Please specify)

Budget Range: [Your Budget]

Additional Information:
[Please provide any additional details about your sponsorship interest]

I look forward to discussing this opportunity further.

Best regards,
[Your Name]`);

    window.location.href = `mailto:gfg.iecce@gmail.com,prakhar.btech2024@ieccollege.com?subject=${subject}&body=${body}`;
};
