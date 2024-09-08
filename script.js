 function openPlaylist(course) {
            // Replace these URLs with actual playlist links
            const playlistURLs = {
                'mechanical': 'https://www.youtube.com/playlist?list=PLiSPNzs4fD9tiqHO5zEn4PqHmsrWsh6UI&si=hyz6pPyrBohRMs7h',
                'data-analysis': 'https://www.youtube.com/playlist?list=PLU6SqdYcYsfJPF-4HphQQ8OceDtqhlSW8&si=Koo67Tvyb9BGDvFS',
                'cad': 'https://www.youtube.com/playlist?list=PLU6SqdYcYsfJPF-4HphQQ8OceDtqhlSW8&si=Koo67Tvyb9BGDvFS',
                
            };

            window.open(playlistURLs[course], '_blank');
        }

        
