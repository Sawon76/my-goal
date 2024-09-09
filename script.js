 function openPlaylist(course) {
            // Replace these URLs with actual playlist links
            const playlistURLs = {
                'mechanical': 'https://www.youtube.com/playlist?list=PLiSPNzs4fD9tiqHO5zEn4PqHmsrWsh6UI&si=hyz6pPyrBohRMs7h',
                'data-analysis': 'https://www.youtube.com/playlist?list=PLU6SqdYcYsfJPF-4HphQQ8OceDtqhlSW8&si=Koo67Tvyb9BGDvFS',
                'cad': 'https://youtube.com/playlist?list=PLv2ZxY8SkeQWF3YdaR0b7EDH8TIUpWw7_&si=EmMWjy05zFR9ILSa',
                'html': 'https://youtube.com/playlist?list=PLtUrM4epv9fjftaPCCF8Xx6jjb3_WA2Uo&si=7Uf8lRkO2NyENgF4',
                
            };

            window.open(playlistURLs[course], '_blank');
        }

        
