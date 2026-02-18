// mpa list: https://flmusiced.org/MPAOnline/MusicList/SEMusicList.aspx
// https://www.reddit.com/r/Clarinet/comments/3jl3fc/an_exhaustive_list_of_essential_clarinet_music/

//TODO: if no link, then dont display
//TODO: recordings links
//TODO: tags for technical, lyrical, solo, piano, etc

const repertoireData = [
    {
        category: "Beginner",
        color: "green",
        pieces: [
            { title: "Rubank Elementary Method", composer: "N.W Hovey", grade: "Etudes", desc: "Essential for Solo & Ensemble preparation and technical fluency.", url: "https://www.scribd.com/document/405897129/Rubank-Elementary-method-Clarinet-pdf" },
            
            { title: "Gavotte From Symphony No. 4", composer: "Boyce / Vedeski", grade: "Grade 2", desc: "Essential for Solo & Ensemble preparation and technical fluency.", url: "https://www.scribd.com/document/405897129/Rubank-Elementary-method-Clarinet-pdf" },
            { title: "Bach Minuet in G", composer: "Bach / Buchtel", grade: "Grade 2", desc: "Essential for Solo & Ensemble preparation and technical fluency.", url: "https://www.scribd.com/document/405897129/Rubank-Elementary-method-Clarinet-pdf" },
        ]
    },
    {
        category: "Intermediate",
        color: "indigo",
        pieces: [
            { title: "Rose Etudes", composer: "Rose Cyrille", grade: "Etudes", desc: "Essential for Solo & Ensemble preparation and technical fluency.", url: "https://imslp.org/wiki/32_Etudes_for_Clarinet_(Rose,_Cyrille)" },
            
            { title: "Jeanjean 18 Etudes", composer: "Paul Jeanjean", grade: "Etudes", desc: "Essential for Solo & Ensemble preparation and technical fluency.", url: "https://imslp.org/wiki/18_Etudes_for_the_Clarinet_(Jeanjean%2C_Paul)" },
            { title: "Deepwood", composer: "David Bennett", grade: "Grade 3-4", desc: "Excellent for developing the rich, woody low register of the bass clarinet.", url: "#" },
            { title: "Eccles Sonata In G Minor", composer: "Eccles Henry", grade: "Grade 5", desc: "Excellent for developing the rich, woody low register of the bass clarinet.", url: "#" },
            { title: "Clair Matin", composer: "Paul Jeanjean", grade: "Grade 6", desc: "College audition piece.", url: "https://imslp.org/wiki/Clair_matin_(Jeanjean,_Paul)" },
            { title: "Weber Clarinet Concerto No.1 in F minor", composer: "Carl Maria von Weber", grade: "Concerto", desc: "College audition piece.", url: "https://imslp.org/wiki/32_Etudes_for_Clarinet_(Rose,_Cyrille)" },
            { title: "Mozart Clarinet Concerto in A Major", composer: "Wolfgang Amadeus Mozart", grade: "Concerto", desc: "College audition piece.", url: "https://imslp.org/wiki/Clarinet_Concerto_in_A_major,_K.622_(Mozart,_Wolfgang_Amadeus)" },
            { title: "Saint-Saëns Clarinet Sonata", composer: "Camille Saint-Saëns", grade: "Concerto", desc: "College audition piece.", url: "https://imslp.org/wiki/Clarinet_Sonata,_Op.167_(Saint-Sa%C3%ABns,_Camille)" },
            // add BCL Cello Suite Bach
            // add Kovacs - Hommages
            // add Solo de concours
        ]
    },
    {
        category: "Advanced",
        color: "rose",
        pieces: [
            { title: "Cavallini 30 Caprices", composer: "Ernesto Cavallini", grade: "Etudes", desc: "Essential for Solo & Ensemble preparation and technical fluency.", url: "https://imslp.org/wiki/18_Etudes_for_the_Clarinet_(Jeanjean%2C_Paul)" },
            { title: "Vade-Mecum", composer: "Paul Jeanjean", grade: "Etudes", desc: "Essential for Solo & Ensemble preparation and technical fluency.", url: "https://imslp.org/wiki/Vade-Mecum_du_Clarinettiste_(Jeanjean,_Paul)" },
            { title: "Ballade", composer: "Eugène Bozza", grade: "Grade 5-6", desc: "Demands extreme control over dynamics and altissimo range.", url: "#" },
            { title: "Bass Clarinet Concerto", composer: "Todd Goodman", grade: "Concerto", desc: "A contemporary masterpiece requiring virtuosic technique.", url: "#" }
            // add Sonata Poulenc
        ]
    }
];

const container = document.getElementById('repertoire-grid');

// Render the UI
container.innerHTML = repertoireData.map(section => `
            <section class="mb-16">
                <div class="flex items-center mb-8">
                    <h3 class="text-2xl font-bold text-slate-900">${section.category}</h3>
                    <div class="ml-4 h-px bg-slate-200 flex-grow"></div>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${section.pieces.map(piece => `
                        <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md transition-shadow">
                            <span class="text-xs font-bold uppercase tracking-wider text-${section.color}-600 bg-${section.color}-50 px-2 py-1 rounded w-fit">
                                ${piece.grade}
                            </span>
                            <h4 class="text-lg font-bold mt-3 text-slate-900">${piece.title}</h4>
                            <p class="text-slate-600 text-sm mt-1">${piece.composer}</p>
                            <p class="mt-4 text-slate-500 text-sm leading-relaxed flex-grow">
                                ${piece.desc}
                            </p>
                            <a href="${piece.url}" target="_blank" class="mt-6 inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
                                View Sheet Music
                                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                </svg>
                            </a>
                        </div>
                    `).join('')}
                </div>
            </section>
        `).join('');