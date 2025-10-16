  document.addEventListener('DOMContentLoaded', function() {

            const books = [
                {
                    title: "The Midnight Library",
                    author: "Matt Haig",
                    price: "₱150.99",
                    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuCp7zlfV4SVCgtQ-TjOTZ33OtKatHbsAtt_EBaf4g-C6K7Fx9vXzqnYqs-yVVqJ_BOVt3Uh8lVik0dSRY0cvPpFdKasCiK2xHe9UAMfXHVfT--N7P7FcSc2pl-tg5iIx9dguwMGGSL98gxD87GPuFBcX19VCF6RTTXiLZsyBS7diGgPJ6aQjA2HcdM0mAp_owyNK58dGErXPedhARud9ZZs63KM1Um0Mh_MdiEulZGKM1ocLWX3B8H1GykTwrVEFiIlciIrsHJ5xDyO"
                },
                {
                    title: "Where the Crawdads Sing",
                    author: "Delia Owens",
                    price: "₱170.50",
                    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbqrv7eBhktganvEaNRc9dz6EztYcJMy25M7dvYqzC4kmqBopAEM-iWnOEtpwaWGhC10wOtlUhYu_OpMJgMLK4Am1dKd1hmPOBfv24OH7FxjKX-wQTwfwJpyWZTSnR2iMuwZn0QdDT8EdeXQWzQ26x82t9a0R1_53a_DUDeph1ZMZHRqsQDKNIkOIcaO-SP4nqncv9tFy6sniBSa256E8eXrogs_PcdqQ3tVP6oNNObQZ7bSckCM_wKUPnXSiQVgmD0m9VHP6LOL3m"
                },
                {
                    title: "The Silent Patient",
                    author: "Alex Michaelides",
                    price: "₱140.00",
                    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuA97rsfacInqz1b9EV2fRlTU-FfZYebddg11AxqyFDXv_Vma0oC2g1priHjfeVFFKCDHoYPgRGis9RtYsQf6tzwCh_3PQ8MPDAI_SIB2EQgSCeHwBGmChwjazLLtTJxLaj4OpnRUk2Gh-yDPZ7ATMqNk7AgVq4TsPhuBHO4P7Y5iBf9hBiULScMVAaEckQ15WU9KV12QfDTOT2Jt3CzK3fps1V7Lu8a8AquuLc75wneKGFLWIso0_8IjRE_ybAt_Cz4oMajS7h165YJ"
                },
                {
                    title: "The Seven Husbands of...",
                    author: "Taylor Jenkins Reid",
                    price: "₱160.25",
                    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-bzKq2LZ0OAZTq9ikW9sAUHqxPpjZiLxviAKszYsr8sXUH_IgCEGkqXp5Z-F9Ci1N_A9crx9Mc5Y_Tp7AsVME5AQdnH5mC0YH7pk_nMsUOnx5QDQZX470qBArKs4fgRrzlWr8NMYAteO1f4Nw7JxfNGhDQZx0-KmnzRHd2BwYMetV_jP4eTv1gMf8-8nmRsXPJOVGBv7EaoZ1TzCMdHK8MeCW5nGrkUW9KlpekqPy7qLIe6oQPOD_qBNLx5YtX1dZYTkDk2f-FVHp"
                },
                {
                    title: "Project Hail Mary",
                    author: "Andy Weir",
                    price: "₱180.00",
                    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdpw1zqGk4JGbxlKZKaeVNH10GbTYls_xTPTB_LECej1QseeejPNxYic8yYYI0FeYtqDgztacCe_QK1ARqcrpjAI1R-8XlQHMV3gjLh75S7tGhJQ7-fFZ3yfvP5u9k5FIlwxxU1elQiEpVwLgvKDsthpy9mNIjVdpyrO2rL-RSdqNkfwwqZjOq7OcyCOCY95LJcz255QGVeRCFnxRRUa3yry1dhbHUizDjQ971aNxkaUBe5St2f5TekvMOl_v0WGB2qQeL1xX8txiJ"
                },
                {
                    title: "It Ends With Us",
                    author: "Colleen Hoover",
                    price: "₱120.50",
                    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfodqNyIPbZZQWgN7CveIEng7ZiHYNjH1KkRkio8IsJg34V4vbqmq1H8v3imQY74ap-rOTPibdkHY-xkA3mZqUkhvVVwmCdQNZ90p1I6Dynvpwd3AlPGAQmjrHdElDoigKBkKutzjTyL3kQBC-jJ549CPrPZoHl2UJmgb-dk_E2158ClleviAN-TVV_GBIuCza5-QjZJHScRCkfUS6Q7tX7SptNQVNt7CYIeS0no025AFt-77wOnBp2GC-fxCW0tAJQBkk1lzmIMCT"
                },
                {
                    title: "Verity",
                    author: "Colleen Hoover",
                    price: "₱101.99",
                    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjIPumQQmWHJNxpGocysqSoj9_FVwQUthAHhEkf5rhg-BGFVe05Bfm7ksQ4cvhSAYapqDxHWtp3mHZ4Ctd6LGI1hu6Yb4BKTSUn3AcgMMeXRkvK-eTt4mhJ7JtjHaFlucCMOksxMQZr4ntplrBwWnbj6OACkkGY3mYQivcL-jabNrkGgzuJVgjCrsl31SVoofPXtlBRqadwDCyt5wHIG5goONGsyYCel7LudeOeJN8Jti9aK18fPpdXFLafL1iFfnQ08AF-QoyuVvX"
                },
                {
                    title: "The Love Hypothesis",
                    author: "Ali Hazelwood",
                    price: "₱130.75",
                    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKF210-0O0buMWqJOpP00e-FNi0LOjB83NhlhPQ2ixY1rF6KjfS-JPTIkRsTFKgJuVDwOlq4NMx3m9oseMOGse18mpfCKIO-xYnb243oIjpC8TkJ5fvBfboG0q-yGWGL-t-iRXGo0Q8lxHsSvgr-EvAYUkXPzWkvxTHb_sE7p14fCxLW0ZqOAi19PLIu4mm9qCzeYvv29GBaJhUaZpohqtFKm85Ai4zKPBRgrbTAV5h61K_uOnp9JMafssxyjUc1mlWmKTfj5GOrFp"
                },
                {
                    title: "The Spanish Love Deception",
                    author: "Elena Armas",
                    price: "₱140.99",
                    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuCK4dwMS_6tG96Q9uu3tVsF2d4ELNJh-44OKMvnCe0Uf4uMpLEwTJ0Y3o2cGRGwE3XS2-cyJLqHvyUByRw-6Aqz8168SzpWqt18KHouf7mtKfHsBp1v9ykExGuXPic_voEe5NtsEBLdNQaK35p-M4nkBIE84MddRTZn8Ciz6xcX9SQarRHNQ3hpiPoc3_Z5A4jda-RvHGSmRtRU0dsNVx8eDpAbWBYHNU8MQsdNUbj_km1kI0fqZ1U8F_pjQyY9-1BnBMJU3iZU4rqK"
                },
                {
                    title: "The Invisible Life of...",
                    author: "V.E. Schwab",
                    price: "₱190.99",
                    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiu_rP22dSssq7Cg5O7bUHoBe_r5fQ29YjjgnaFcIza90dcomB8kTlmWhIFdNc5eza95l9FgFDv7yoEq15xEn07j3jhG5B42UX8g8Q-B5ck2TAQLHxlmMl2wEG9DQDAIT487ELlHZu7KwDHFbwJZqFpscAe7BlMMSqMFP2LU2CpyZ5DDTShQGD8OTmV92X8PzEuqrz_3kxThUlVxxGpsHTiPcDwKMhKr3o1r-c3uIaPgfMSiGYpdWkBiG81PJVrzz82zR2w-h_jBZ2"
                },
                {
                    title: "Ugly Love",
                    author: "Colleen Hoover",
                    price: "₱100.50",
                    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdsM-LJZ5DmBApsxZ7Das_VfQXrhGlNb6B_05XPYYFC4YCGFLobCNOVrU6GwsS79F_7s0IBzoaRl8XHrgVoG1CyBcIB6YdxROyJRXoLAws9A5-4dRO_bF2yRhCOwrpAOhA7CovXzSKBpEuIXFsuw-ictplDNKmUUSF9BH52a5zV057HMXFl_OPHLlsb_QoREJfEG07xjjO0xiK55fOBNwxp2d37FP_mnRtjX1HHhhQAhZowHEqxFNTRnIchjIXF0M2HyJw-Wifh_-G"
                },
                {
                    title: "The Song of Achilles",
                    author: "Madeline Miller",
                    price: "₱160.99",
                    cover: "https://lh3.googleusercontent.com/aida-public/AB6AXuCljXFRzc2A7uA9IRjumzeLf3ewiNMjtWnteiWV3gOJsoqkxGZ1ZHbiut9jo5tc4YCuSILD1W3PF64n1K-fytK3ISyqCsBdly5YPzZ0To1tl0l2eJmuPuZRLKX-kfp6d7n3A_wpuPri2h0whj2I88zOUqaP0DJgLroXjwF67yGNI310qGIlaP8h2K7GgQdZnIgAgw6y1Did65nVBAUCDdFLt3t_t9-VWZHq5sCjTXhV3rafIkAOPnMyCOT98gigFqU1n4ZsmPhTsEIp"
                }
            ];

            // Populate books grid
            const booksGrid = document.querySelector('.books-grid');
            
            books.forEach(book => {
                const bookItem = document.createElement('div');
                bookItem.className = 'book-item';
                
                bookItem.innerHTML = `
                    <div class="book-cover" style="background-image: url('${book.cover}')"></div>
                    <div class="book-info">
                        <h3>${book.title}</h3>
                        <p>${book.author}</p>
                        <p class="book-price">${book.price}</p>
                    </div>
                `;
                
                booksGrid.appendChild(bookItem);
            });

            // Filter button functionality
            const filterButtons = document.querySelectorAll('.filter-btn');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    

                    console.log(`Filter by: ${this.querySelector('span').textContent}`);
                });
            });

   
            const searchInput = document.querySelector('.search-input');
            
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                

                if (searchTerm.length >= 3) {
                    console.log(`Searching for: ${searchTerm}`);
                }
            });
        });