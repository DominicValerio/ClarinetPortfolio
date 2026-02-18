const repertoireData = [
    {
        category: "Beginner",
        color: "green",
        pieces: [
            { 
                title: "Rubank Elementary Method", 
                composer: "N.W Hovey", 
                grade: "Etudes", 
                tags: ["technical", "method"],
                desc: "The foundation for every Florida clarinetist. Focuses on the low register and crossing the break.", 
                url: "https://www.scribd.com/document/405897129/Rubank-Elementary-method-Clarinet-pdf",
                recording: "" 
            },
            { 
                title: "Gavotte From Symphony No. 4", 
                composer: "Boyce / Vedeski", 
                grade: "Grade 2", 
                tags: ["classical", "solo"],
                desc: "Essential for Solo & Ensemble preparation and technical fluency.", 
                url: "",
                recording: "" 
            },
            { 
                title: "Bach Minuet in G", 
                composer: "Bach / Buchtel", 
                grade: "Grade 2", 
                tags: ["solo", "classical"],
                desc: "Great for developing light tonguing and consistent air flow.", 
                url: "https://imslp.org/wiki/Notebook_for_Anna_Magdalena_Bach_(Bach,_Johann_Sebastian)",
                recording: "https://www.youtube.com/watch?v=NlT3idYlXmE"
            }
        ]
    },
    {
        category: "Intermediate",
        color: "indigo",
        pieces: [
            { 
                title: "32 Etudes", 
                composer: "Cyrille Rose", 
                grade: "Etudes", 
                tags: ["lyrical", "essential"],
                desc: "Based on Ferling's oboe etudes. Essential for learning to 'sing' on the instrument.", 
                url: "https://imslp.org/wiki/32_Etudes_for_Clarinet_(Rose,_Cyrille)",
                recording: "https://www.youtube.com/watch?v=Jd_h04W-HH0&list=PLiDVgcuF8JTwDMKeMMEmwvmjjxN_m8evK"
            },
            { 
                title: "18 Etudes", 
                composer: "Paul Jeanjean", 
                grade: "Etudes", 
                tags: ["technical", "french"],
                desc: "Highly technical studies focusing on finger dexterity and modern phrasing.", 
                url: "https://imslp.org/wiki/18_Etudes_for_the_Clarinet_(Jeanjean%2C_Paul)",
                recording: "" 
            },
            { 
                title: "Deepwood", 
                composer: "David Bennett", 
                grade: "Grade 3-4", 
                tags: ["bass clarinet", "solo"],
                desc: "Excellent for developing the rich, woody low register of the bass clarinet.", 
                url: "#",
                recording: "https://www.youtube.com/watch?v=kbZ8pDOUI1s&list=RDkbZ8pDOUI1s&start_radio=1" 
            },
            { 
                title: "Sonata In G Minor", 
                composer: "Henry Eccles", 
                grade: "Grade 5", 
                tags: ["baroque", "solo"],
                desc: "Commonly played on Bass Clarinet; excellent for phrasing and dynamic control.", 
                url: "#",
                recording: "" 
            },
            { 
                title: "Clair Matin", 
                composer: "Paul Jeanjean", 
                grade: "Grade 6", 
                tags: ["lyrical", "french"],
                desc: "A beautiful, pastoral French contest piece often used for college auditions.", 
                url: "https://imslp.org/wiki/Clair_matin_(Jeanjean,_Paul)",
                recording: "https://www.youtube.com/watch?v=5JJzBTfLSZQ&list=RD5JJzBTfLSZQ&start_radio=1" 
            },
            { 
                title: "Solo de Concours", 
                composer: "André Messager", 
                grade: "Grade 6", 
                tags: ["solo", "technical", "piano"],
                desc: "A flashy Paris Conservatory contest piece. Excellent for finger dexterity.", 
                url: "https://imslp.org/wiki/Solo_de_concours_(Messager,_Andr%C3%A9)",
                recording: "https://www.youtube.com/watch?v=Hzfkf7RzUYE&list=RDHzfkf7RzUYE&start_radio=1"
            },
            { 
                title: "Clarinet Concerto No. 1", 
                composer: "C.M. von Weber", 
                grade: "Concerto", 
                tags: ["solo", "virtuosic"],
                desc: "A cornerstone of the repertoire. Requires dramatic expression and technical precision.", 
                url: "https://imslp.org/wiki/Clarinet_Concerto_No.1%2C_Op.73_(Weber%2C_Carl_Maria_von)",
                recording: ""
            },
            { 
                title: "Clarinet Concerto in A Major", 
                composer: "W.A. Mozart", 
                grade: "Concerto", 
                tags: ["essential", "classical"],
                desc: "The most important piece in the clarinetist's library. Standard for all auditions.", 
                url: "https://imslp.org/wiki/Clarinet_Concerto_in_A_major,_K.622_(Mozart,_Wolfgang_Amadeus)",
                recording: ""
            },
            { 
                title: "Clarinet Sonata", 
                composer: "Camille Saint-Saëns", 
                grade: "Sonata", 
                tags: ["lyrical", "standard"],
                desc: "Elegant and technical; a staple of the late Romantic French style.", 
                url: "https://imslp.org/wiki/Clarinet_Sonata,_Op.167_(Saint-Sa%C3%ABns,_Camille)",
                recording: ""
            },
            { 
                title: "Cello Suites", 
                composer: "J.S. Bach", 
                grade: "Grade 5", 
                tags: ["bass clarinet", "unaccompanied"],
                desc: "Transcribed for Bass Clarinet. Essential for developing Baroque phrasing.", 
                url: "",
                recording: "" 
            }
        ]
    },
    {
        category: "Advanced",
        color: "rose",
        pieces: [
            { 
                title: "30 Caprices", 
                composer: "Ernesto Cavallini", 
                grade: "Etudes", 
                tags: ["technical", "virtuosic"],
                desc: "The 'Paganini of the Clarinet.' These caprices are highly technical and operatic.", 
                url: "https://imslp.org/wiki/30_Caprices_for_Clarinet_(Cavallini,_Ernesto)",
                recording: "" 
            },
            { 
                title: "Vade-Mecum", 
                composer: "Paul Jeanjean", 
                grade: "Etudes", 
                tags: ["technical", "advanced"],
                desc: "The 'manual' for advanced clarinetists. Focuses on complex scales and intervals.", 
                url: "https://imslp.org/wiki/Vade-Mecum_du_Clarinettiste_(Jeanjean,_Paul)",
                recording: "" 
            },
            { 
                title: "Ballade", 
                composer: "Eugène Bozza", 
                grade: "Grade 6", 
                tags: ["contemporary", "solo"],
                desc: "Demands extreme control over dynamics and altissimo range.", 
                url: "#",
                recording: "" 
            },
            { 
                title: "Bass Clarinet Concerto", 
                composer: "Todd Goodman", 
                grade: "Concerto", 
                tags: ["bass clarinet", "contemporary"],
                desc: "A contemporary masterpiece requiring virtuosic technique on the low instrument.", 
                url: "#",
                recording: "" 
            },
            { 
                title: "Sonata for Clarinet", 
                composer: "Francis Poulenc", 
                grade: "Grade 7", 
                tags: ["solo", "contemporary", "essential"],
                desc: "One of the most important 20th-century works. Quirky, aggressive, and deeply moving.", 
                url: "https://imslp.org/wiki/Clarinet_Sonata,_FP_184_(Poulenc,_Francis)",
                recording: ""
            },
            { 
                title: "Hommages", 
                composer: "Béla Kovács", 
                grade: "Advanced", 
                tags: ["solo", "technical", "unaccompanied"],
                desc: "Written in the style of various great composers (Bach, Paganini, Weber).", 
                url: "#", 
                recording: "https://www.youtube.com/watch?v=X9XJBhp-fyI&list=RDX9XJBhp-fyI&start_radio=1"
            }
        ]
    }
];

const container = document.getElementById('repertoire-grid');

// Helper to handle tag colors
const getTagColor = (tag) => {
    const map = {
        technical: 'bg-blue-100 text-blue-700',
        lyrical: 'bg-pink-100 text-pink-700',
        solo: 'bg-amber-100 text-amber-700',
        essential: 'bg-purple-100 text-purple-700',
        'bass clarinet': 'bg-slate-800 text-white',
        virtuosic: 'bg-rose-100 text-rose-700'
    };
    return map[tag] || 'bg-slate-100 text-slate-700';
};

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
                    <div class="flex justify-between items-start">
                        <span class="text-xs font-bold uppercase tracking-wider bg-slate-50 text-slate-500 px-2 py-1 rounded">
                            ${piece.grade}
                        </span>
                        <div class="flex flex-wrap justify-end gap-1 max-w-[120px]">
                            ${piece.tags.map(tag => `
                                <span class="text-[9px] uppercase px-1.5 py-0.5 rounded font-bold ${getTagColor(tag)}">
                                    ${tag}
                                </span>
                            `).join('')}
                        </div>
                    </div>

                    <h4 class="text-lg font-bold mt-3 text-slate-900 leading-tight">${piece.title}</h4>
                    <p class="text-slate-600 text-sm mt-1">${piece.composer}</p>
                    <p class="mt-4 text-slate-500 text-sm leading-relaxed flex-grow">
                        ${piece.desc}
                    </p>

                    <div class="mt-6 flex gap-4">
                        ${(piece.url && piece.url !== "#") ? `
                            <a href="${piece.url}" target="_blank" class="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
                                Sheet Music
                                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                            </a>
                        ` : ''}
                        
                        ${piece.recording ? `
                            <a href="${piece.recording}" target="_blank" class="inline-flex items-center text-sm font-semibold text-rose-600 hover:text-rose-800 transition-colors">
                                Listen
                                <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"></path></svg>
                            </a>
                        ` : ''}
                    </div>
                </div>
            `).join('')}
        </div>
    </section>
`).join('');