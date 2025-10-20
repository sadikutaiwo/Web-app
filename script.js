let search_bar = document.getElementsByClassName('search-bar')[0];

        // Add event listener for real-time search as user types
        search_bar.addEventListener('input', function() {
            let searchValue = this.value.toLowerCase().trim();
            let sections = document.querySelectorAll('.section');
            
            sections.forEach(function(section) {
                let appCards = section.querySelectorAll('.app-card');
                let hasVisibleCards = false;
                
                // Check each app card in this section
                appCards.forEach(function(card) {
                    let appName = card.getAttribute('data-app');
                    
                    if (appName.includes(searchValue)) {
                        card.classList.remove('hidden');
                        card.style.animation = 'fadeInUp 0.4s ease';
                        hasVisibleCards = true;
                    } else {
                        card.classList.add('hidden');
                    }
                });
                
                // Hide section title if no cards match
                let sectionTitle = section.querySelector('.section-title');
                if (hasVisibleCards) {
                    sectionTitle.classList.remove('hidden');
                } else {
                    sectionTitle.classList.add('hidden');
                }
            });
            
            // If search bar is empty, show all sections and apps
            if (searchValue === '') {
                sections.forEach(function(section) {
                    let appCards = section.querySelectorAll('.app-card');
                    let sectionTitle = section.querySelector('.section-title');
                    
                    appCards.forEach(function(card) {
                        card.classList.remove('hidden');
                        card.style.animation = 'fadeInUp 0.4s ease';
                    });
                    
                    sectionTitle.classList.remove('hidden');
                });
            }
        });

        // Optional: Clear search on Escape key
        search_bar.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                this.value = '';
                this.dispatchEvent(new Event('input'));
            }
        });