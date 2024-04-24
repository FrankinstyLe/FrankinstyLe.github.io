document.getElementById("yearForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var birthYear = document.getElementById("birthYear").value;
    fetchResults(birthYear);
});

function fetchResults(year) {
    var resultsContainer = document.getElementById("results");
    
    // Clear previous results
    resultsContainer.innerHTML = "";

    // Check the birth year and display the same content for the specified years
    if (year == 1936 || year == 1948 || year == 1960 || year == 1972 || year == 1984 || year == 1996 || year == 2008 || year == 2020) {
        resultsContainer.innerHTML = `<h2>Rat Age Horoscope in The Year of Dragon 2024</h2>
            <p><strong>Fortune overall:</strong> 7.5/10</p>
            <p><strong>Career:</strong> 7.5/10</p>
            <p><strong>Financial:</strong> 7/10</p>
            <p><strong>Love:</strong> 9/10</p>
            <p><strong>Health:</strong> 7.5/10</p>
            <p><strong>Lucky color:</strong> Bronze gold</p>
            <p><strong>Lucky numbers:</strong> 1, 6</p>
            <h3>Overview</h3>
            <p>Those who wield the rat will have a pretty good year and many surprises in a positive way. Rat is inherently progressive and hardworking. Once you have good luck, you will know how to bring out your abilities, strengths and achieve better results than those around you. 2024 will give you a life of relief over the past two years. The career is smooth, quite favorable, and the romantic relationship is brilliant. However, it is necessary to pay attention to the balance between work and rest even though next year will be very busy and exciting. While working hard, you should also try to spend more time with family and friends, enjoy love, and immerse yourself in the arms of family and friends.</p>
            <h3>Career</h3>
            <p>Rat will reap small but meaningful achievements in the workplace. You know how to demonstrate your competence at the right time in the right place, make the right and decisive decisions, so that all tasks assigned to you by your boss are completed smoothly. If you work in the merchandising field, you will close many big deals and patrons. Your biggest obstacle at work is that you may encounter implicit competition and envy from colleagues and rivals. When working in a team, you are also prone to friction and arguments with teammates. You need to be more flexible in your relationships at work, curb your temper if you don't want to spoil things. Because you will need to work quite a bit in a team in the coming year.</p>
            <h3>Finances</h3>
            <p>The fortune of the Rat people in 2024 is at a decent level. You will have a stable source of income, an abundant material life, no worries about deprivation or hunger. If you do business, good work helps you grow revenue quite a lot. You will also have some unexpected fortunes related to investments.</p>
            <h3>Love</h3>
            <p>It will be the most noticeable highlight of the Rat age in the year of the Dragon. If you're single, you need to become more confident and courageous. If you meet someone you like, take the initiative to confess, otherwise you will miss a great partner. 2024 will treat you with both accidental and unexpected "encounters" with "quality" and tasteful individuals. Therefore, please interact and socialize to meet the person of your dreams soon! If you are in a relationship, your love will be stronger than ever. You and your partner may grow to the stage of commitment such as getting engaged, getting married, or moving in together. For those of you who have a spouse, even if your married life is stable, you and your partner still inevitably lack trust in each other. To solve this, in daily life, the two must not hide anything from each other. Good or bad, you have to tell your partner to dispel all doubts and coldness.</p>
            <h3>Health</h3>
            <p>The health of the Rat people in the New Year is quite good. Thanks to that, your spirit during the coming time will be very stable, even more excited than usual. You won't have to worry about illness or injury problems. However, pay more attention to the health of your family members, especially your parents. Take them for regular check-ups, as your loved one may have some terminal or serious illnesses that need to be diagnosed early.</p>
            <p>Sources: <a href="Link">Link</a></p>
            <p>Translator: Truc Le</p>`;
    } else if (year == 1937 || year == 1949 || year == 1961 || year == 1973 || year == 1985 || year == 1997 || year == 2009 || year == 2021) {
        resultsContainer.innerHTML = `<h2>Ox Age Horoscope in The Year of Dragon 2024</h2>
            <p><strong>Fortune overall:</strong> 4/10</p>
            <p><strong>Career:</strong> 8.5/10</p>
            <p><strong>Financial:</strong> 4/10</p>
            <p><strong>Love:</strong> 6/10</p>
            <p><strong>Health:</strong> 4/10</p>
            <p><strong>Lucky color:</strong> Red</p>
            <p><strong>Lucky numbers:</strong> 6, 8</p>
            <h3>Overview</h3>
            <p>The Ox people will face many difficulties due to the “Fan Tai Sui” (bad fate?!). Overall fortunes declined quite badly, especially in the health and financial sectors. Therefore, you should not set too many goals and expectations for next year. Instead, whatever you do, you should be cautious and plan clearly, follow the principle that safety comes first, and do not take risks. Luckily, your career isn't affected too much, don't worry!</p>
            <h3>Love</h3>
            <p>Due to the influence of bad planets, you will encounter many sorrows in your love story. You become negative, pessimistic and self-contained, so the love path is not favorable. If you're single, it's hard to find the right person to talk about long-term. The likelihood of a full year is high. If you are in love, the two of you will gradually become estranged from each other, less sharing and connecting, which can lead to rifts, even separation, especially with long-distance couples. With married Ox people, friction and conflict will occur continuously. Fortunately, whenever arguing, there will be relatives and friends to help mediate. The couple should give in to each other a little more, and family life will gradually return to peace.</p>
            <h3>Career</h3>
            <p>Because the performance of the whole year is quite bad, you may have an injury or illness, which can significantly affect the work. If you are working as a leader or have great responsibility for a project, you have to delay construction due to health reasons. The good thing is that you have the “Tian De” Star to support you throughout the year, so you will get help from people, most likely women such as bosses or colleagues. They will help you overcome the situation and make a great success.</p>
            <h3>Finance</h3>
            <p>The Ox people may suffer great financial losses in the year of the Dragon. So, while you're constantly striving to make money, you should also save your spending and manage your personal wealth carefully, avoiding losing money because of things that aren't worth it. If you intend to buy and sell to invest in business, you should put safety and caution first. Next year, you may also be asked by relatives or friends to borrow money constantly. Do not lend indiscriminately, otherwise it will be difficult to get that money back.</p>
            <h3>Health</h3>
            <p>The state of health of the Ox people is very alarming. There could be bloodshed and accidents next year, especially for women. You need to pay attention when participating in traffic and driving, going out. For people who are already old, physically not very good, prone to serious pathologies. You should visit the doctor regularly to prevent any problems.</p>
            <p>Source: <a href="Link">Link</a></p>
            <p>Translator: Truc Le</p>`;
    } else if (year == 1938 || year == 1950 || year == 1962 || year == 1974 || year == 1986 || year == 1998 || year == 2010 || year == 2022) {
        resultsContainer.innerHTML = `<h2>Tiger Age Horoscope in The Year Of Dragon 2024</h2>
            <p><strong>Fortune overall:</strong> 5.5/10</p>
            <p><strong>Career:</strong> 5/10</p>
            <p><strong>Financial:</strong> 6/10</p>
            <p><strong>Love:</strong> 6.5/10</p>
            <p><strong>Health:</strong> 5/10</p>
            <p><strong>Lucky colors:</strong> Gray, blue</p>
            <p><strong>Lucky numbers:</strong> 3, 7</p>
            <h3>Overview</h3>
            <p>Overall bad luck in 2024. The unfortunate things that happen to you one after another, even without serious losses, happen in almost every area. If you are mentally unstable, vulnerable, and sensitive, you are more likely to experience mental illness, even depression. What you need to do in the new year is control your temper, stay calm and ask friends and relatives if you can't solve all the problems yourself. Especially in public, you must not behave impulsively, recklessly, otherwise it can lead to serious consequences.</p>
            <h3>Career</h3>
            <p>The work of Tiger people will have many changes in the year of Dragon, which can be a major reform, renewal and purification of internal personnel of the company. Executives can be restructured, and mass layoffs can cost you your job at any time. Therefore, you should perform well in front of superiors, and try to maintain harmonious, stable relationships with colleagues. If you have to quit your job or lose your job, you should not be too worried and stressed, give yourself some time to rest, relax, adjust your living and life habits, then find a new job is not too late. Overall, 2024 is a pretty bleak year and there's no big progress with your career.</p>
            <h3>Finance</h3>
            <p>Your finances will also be quite diminishing next year. Your family or those close to you may have some worrisome medical conditions that cause you to be financially involved. Money pressure will come to you quite a lot, such as houses, children, living needs and unwanted expenses due to furniture damage, vehicles, diseases. In addition to ensuring a stable income, you should think about working part-time or doing business to earn extra money.</p>
            <h3>Love</h3>
            <p>The spirit of the Tiger people becomes quite fragile and sensitive in the coming year. This will affect the current relationship, if you are in love or married. You and your partner may often misunderstand each other due to heartless and inadvertent actions and words, leading to anger and cold war. Both tend to be avoidant and unwilling to solve problems positively. Fortunately, after many such times, both parties will learn to adapt and get along with each other. The peaceful atmosphere will return to the two of you soon. If you are single, it will be difficult to escape that status in 2024. You become introverted, self-conscious, and suspicious when someone of the opposite sex approaches you.</p>
            <h3>Health</h3>
            <p>The health of the Tiger is quite bad next year. You may experience serious injuries as a result of an accident or hit a sharp object. Therefore, you need to pay special attention when exercising, driving, or participating in traffic. You should also adjust your diet so that it is healthiest, avoid eating greasy and frozen foods. Because next year, you are prone to diseases related to cholesterol and digestion.</p>
            <p>Source: <a href="Link">Link</a></p>
            <p>Translator: Truc Le</p>`;
    } else if (year == 1939 || year == 1951 || year == 1963 || year == 1975 || year == 1987 || year == 1999 || year == 2011 || year == 2023) {
        resultsContainer.innerHTML = `<h2>Cat Age Horoscope in The Year of Dragon 2024</h2>
            <p><strong>Fortune overall:</strong> 5/10</p>
            <p><strong>Career:</strong> 6.5/10</p>
            <p><strong>Financial:</strong> 3.5/10</p>
            <p><strong>Love:</strong> 5/10</p>
            <p><strong>Health:</strong> 5/10</p>
            <p><strong>Lucky colors:</strong> Yellow, blue</p>
            <p><strong>Lucky numbers:</strong> 8, 9</p>
            <h3>Overview</h3>
            <p>Due to the influence of the Crown Prince, the Cat people will have an unpeaceful time next year. You may face physical and mental health problems, injuries or accidents. Your life is also disturbed by many difficulties caused by small people. You need to train your spirit and willpower well to overcome all obstacles in 2024. In general, in the year of the Dragon, your journey is easier to breathe than the previous year, but it is not yet "time". You should stay hidden and persist.</p>
            <h3>Career</h3>
            <p>In the workplace, Cat people become careless and prone to mistakes. You can cause large financial losses to the company or corporation. Luckily, you have strong support from the Solar Star in 2024. You will have a supportive gentleman, most likely a man and receive a lot of advice, the right guidance, and overcome accident(s).</p>
            <h3>Finance</h3>
            <p>The Cat people will spend a lot next year. Your ability to make money is also much worse than in previous years. Financial opportunities are no longer plentiful and come to you easily. As a result, income will decrease significantly, while the need to spend money will increase. You should save and protect your property, because theft and robbery may occur. In 2024, you should not think about investing or doing business, buying valuable items.</p>
            <h3>Love</h3>
            <p>If married, the married life of the Cat people will arise turbulent and suspicious of each other. Many conflicts and misunderstandings appear that cause feelings to fracture. You need to be rational when arguing with your partner, take the initiative to find solutions and make peace if possible. You should not keep the mentality of running away or avoiding, because it will only make the situation more complicated. If you are single, bad luck. You will yet able to find “The One”. You may also get involved in ambiguous relationships, leaving you depressed and tired.</p>
            <h3>Health</h3>
            <p>The health of the Cat people in the year of Dragon is very concerning. You are prone to illness, injury, accidents caused by sharp objects or when going out. You need to focus on physical exercise, maintain a healthy lifestyle to increase immunity. In addition, you should regularly visit a health checkup.</p>
            <p>Source: <a href="Link">Link</a></p>
            <p>Translator: Truc Le</p>`;
    } else if (year == 1940 || year == 1952 || year == 1964 || year == 1976 || year == 1988 || year == 2000 || year == 2012 || year == 2024) {
        resultsContainer.innerHTML = `<h2>Dragon Age Horoscope in The Year of Dragon 2024</h2>
            <p><strong>Fortune overall:</strong> 4/10</p>
            <p><strong>Career:</strong> 7.5/10</p>
            <p><strong>Financial:</strong> 5.5/10</p>
            <p><strong>Love:</strong> 2/10</p>
            <p><strong>Health:</strong> 2/10</p>
            <p><strong>Lucky color:</strong> Red</p>
            <p><strong>Lucky numbers:</strong> 8</p>
            <h3>Overview</h3>
            <p>2024 will be an extremely difficult year for Dragon people because you have just had the Fan Tai Sui drought and met the Crown Prince star directly. Moreover, there will be no blessings to support you throughout the coming year. Therefore, you need to avoid taking risky, reckless plans in this one year. It is best to settle down and wait for the opportunity in the following years. In addition, you should also stay hidden, do not get involved in drama or controversies. Don’t set too many goals nor high expectations, because you will put yourself under more pressure and frustration. The task in this year of Dragon is to keep yourself safe, have a peaceful and stable life.</p>
            <h3>Career</h3>
            <p>Under the influence of the Crown Prince, the work situation of Dragon people in 2024 faces many difficulties and pressures. Things will not be able to be under your control, your involvement will be hard and unsmooth. You may encounter interference from small-minded people and other objective factors. However, in luck, despite encountering many difficulties, with your bravery, you still achieve quite a lot. If you do business or trade, your business will have a lot of trouble operating. Luckily, you are surrounded by many friends and seniors who can be there to mentor, support and benefit you. Therefore, you need to expand your partnerships and make more friends in 2024, avoiding working independently. You will learn more experience and skills from them. However, to avoid financial risks and debt, it is best not to expand the business market, just focus on doing well what is available.</p>
            <p>For salaried earners, you may be able to find a pretty good job if you're about to quit or you're unemployed. The possibility of promotion in the current workplace is also very high. Therefore, work hard, focus on cultivating, improving professional expertise and showing your ability to superiors.</p>
            <h3>Finance</h3>
            <p>The money of Dragon people in 2024 may go down quite a lot due to family, especially related to illness and injury. Therefore, you will need to save money in case any uncertainty arises. As a wage earner, your income is likely to grow as your job grows. As for business people, you also earn big profits. However, still be careful not to rush into venture capital deals and brand new fields, because the possibility of loss, debt or bankruptcy is very high. Safety is first, this is the motto of making money for the Dragon people in the coming year.</p>
            <h3>Love</h3>
            <p>Romance is the worst aspect of Dragon people in 2024. If you're single, you may meet many potential people of the opposite sex, but the end result is still not good. You may even encounter bad people, take advantage of your feelings or fall in love with the wrong person, leading to breakups and serious self-harm. As for those who are in a loving relationship or already married, a third person may appear and break up your current relationship, watch out! To avoid the heaviest possible losses, you need to control your temper and the urge to control others. Learn to tolerate and talk with your partner, understand each other and find solutions to improve the relationship, instead of arguing, frustrating and angrying at each other, giving “the third person” a chance to interfere. Otherwise, the two of you may end up separated.</p>
            <h3>Health</h3>
            <p>The health of Dragon people in 2024 is generally not good. You may experience an injury or possibly a serious, life-threatening illness. Therefore, you must not be subjective, it is recommended to visit a doctor regularly for timely diagnosis if there is a problem.</p>
            <p>Source: <a href="Link">Link</a></p>
            <p>Translator: Truc Le</p>`;
    } else if (year == 1941 || year == 1953 || year == 1965 || year == 1977 || year == 1989 || year == 2001 || year == 2013) {
        resultsContainer.innerHTML = `<h2>Snake Age Horoscope in The Year of Dragon 2024</h2>
            <p><strong>Fortune overall:</strong> 7/10</p>
            <p><strong>Career:</strong> 7.5/10</p>
            <p><strong>Financial:</strong> 7/10</p>
            <p><strong>Love:</strong> 8/10</p>
            <p><strong>Health:</strong> 6.5/10</p>
            <p><strong>Lucky color:</strong> Orange</p>
            <p><strong>Lucky numbers:</strong> 0, 2, 7</p>
            <h3>Overview</h3>
            <p>In general, the overall performance of the Snake people in the year of Dragon is very bright, much better than the previous year. You will encounter many big turning points in life, especially in finance and work. Therefore, you need to actively seize opportunities, otherwise, you will regret missing them because it is very difficult to have such opportunities again in the future. Of course, you are still not immune to a few failures in 2024, the way to overcome it is to face it with a calm mind and not give up easily. You should find a way to resolve the situation and never sit around waiting for a ready-to-eat situation.</p>
            <h3>Career</h3>
            <p>The career aspect of the Snake people will change in a positive direction in the coming year. You shouldn't be worried or insecure, because everything will go well. After a period of stagnant work, you will have the opportunity to be promoted and increase your salary. You will have to work harder than before, but this will help you achieve success and gain appreciation from your superiors. Your boss will trust and assign you many projects and tasks with completely new work content. You will need to learn more from many seniors. This will benefit your long-term development in this area. If you're unemployed or unhappy with your current job situation, don't be upset! You can get better new job opportunities with good incentives and salaries.</p>
            <h3>Finance</h3>
            <p>Although the work is favorable, the finances of the Snake people face some difficulties. You will have trouble making more money, hoarding or investing. Of course, you'll still get a sizable income from your full-time job. The base salary and bonuses, or commissions are generally very substantial. The thing is, you should not focus on working part-time,  side business, or investing financially; because you can get into losses, even lose all your hard-earned money. In general, at this stage, if you plunge into business investment or trading, you do not earn any profit, and can be insolvent. Therefore, you should focus only on your specialty and main work. Don't daydream about part-time jobs or side incomes! If you are a business person, just focus on your operating business, it will still be profitable, but do not foolishly step into brand new fields or invest more in other areas!</p>
            <h3>Love</h3>
            <p>The love story of the Snake people is relatively good. If you are single, you may receive a confession of love, pursuit or flirting from a long-time friend or acquaintance who has been secretly in love with you for a long time. The relationship will develop quite quickly, and may even lead to unexpected marriage. For those in love, your relationship will become stronger and stronger in the coming year. Nothing will separate the two. Of course, the two of you are still not immune to petty quarrels. But this is normal for couples! For those of you who are married, you and your partner may have good news about the atmosphere, the family atmosphere is very fun and cozy.</p>
            <h3>Health</h3>
            <p>Health may be the worst aspect of the Snake people in this new year. You may be sick, mild, generally not too serious. Even if in treatment, you will still get through this period and recover quickly. You yourself should do sports regularly, and choose a fitable diet.</p>
            <p>Source: <a href="Link">Link</a></p>
            <p>Translator: Truc Le</p>`;
    } else if (year == 1942 || year == 1954 || year == 1966 || year == 1978 || year == 1990 || year == 2002 || year == 2014) {
        resultsContainer.innerHTML = `<h2>Horse Age Horoscope in The Year of Dragon 2024</h2>
            <p><strong>Fortune overall:</strong> 7.5/10</p>
            <p><strong>Career:</strong> 8/10</p>
            <p><strong>Finance:</strong> 9/10</p>
            <p><strong>Love:</strong> 8/10</p>
            <p><strong>Health:</strong> 5/10</p>
            <p><strong>Lucky color:</strong> Green</p>
            <p><strong>Lucky number:</strong> 5</p>
            <h3>Overview</h3>
            <p>The fortune of people born in the year of the Horse in 2024 is very good, the future is bright. However, to reach the top, you will often experience chaos and change, even challenges. But keep moving forward, don't be afraid. Good things are waiting for you at the end of the road. Many people may think that you have a hard time doing everything yourself in the year of the Dragon, but you yourself feel extremely happy and really enjoy life. You will also accumulate a lot of life experience and problem-solving skills next year. This will be very beneficial for your personal development in the long term.</p>
            <h3>Career</h3>
            <p>The career of people born in the year of the Horse can be described by "suffering first, enjoying later". For office and administrative workers, you are at risk of losing your job or quitting your job in the year of the Dragon. However, unemployment is not a scary thing for you. Because there is a high possibility, you will find a new job that is even better than before. As for those who are doing business, trading or doing sales, you will gain a lot of profit at work, earn many lucrative contracts, succeed in business deals and can receive great rewards. from superiors (if doing sales).</p>
            <h3>Finance</h3>
            <p>The financial fortune of people born in the year of the Horse will be much better than in 2023. You can receive support from noble people, especially men. They can create opportunities or suggest ways to make money, helping you get rich more easily. Income will increase significantly, but you tend to spend wastefully and have difficulty accumulating money. You will need to change the way you spend and manage money, if you don't want money to come quickly but also go quickly.</p>
            <h3>Love</h3>
            <p>The love story of people born in the year of the Horse in 2024 is generally quite good for couples in love and married. Even if there are many conflicts and conflicts, you will find a way to compromise and make up with your other half. Thanks to that, the couple's life is still very sweet and harmonious. Most likely, the cause of the argument between you two is mainly related to money. Therefore, you will need to work harder to earn more money. If still single, people born in the year of the Horse may be involved in a love triangle without knowing it, or be flirted with and deceived by a womanizer. You will need to be attentive and careful in connecting with those who approach you in the year of the Dragon.</p>
            <h3>Health</h3>
            <p>The health condition of people born in the year of the Horse next year will be quite bad. You may encounter many serious illnesses that need immediate care and treatment. In 2024, go for regular check-ups to detect problems promptly if there are any diseases. In addition, you should not participate in risky games and activities to preserve your health and life.</p>
            <p>Sources: <a href="Link">Link</a></p>
            <p>Translator: Truc Le</p>`;
    } else if (year == 1943 || year == 1955 || year == 1967 || year == 1979 || year == 1991 || year == 2003 || year == 2015) {
        resultsContainer.innerHTML = `<h2>Goat Age Horoscope in The Year of Dragon 2024</h2>
            <p><strong>Fortune overall:</strong> 6.5/10</p>
            <p><strong>Career:</strong> 7/10</p>
            <p><strong>Finance:</strong> 8/10</p>
            <p><strong>Love:</strong> 4.5/10</p>
            <p><strong>Health:</strong> 5.5/10</p>
            <p><strong>Lucky colors:</strong> Orange, purple</p>
            <p><strong>Lucky numbers:</strong> 2, 7</p>
            <h3>Overview</h3>
            <p>The fortune of people born in the year of the Goat is generally quite average, alternating between good and bad. Next year, you need to plan carefully and in detail for your life instead of being confused and vague from day to month. You need to be clearly aware of the future, and at the same time point out the advantages and disadvantages to promptly adjust and change. By doing so, you will get closer and closer to a more valuable and elite version. This will bring you a prosperous and meaningful life.</p>
            <h3>Career</h3>
            <p>People born in the year of the Goat may get into unnecessary arguments at work with colleagues or superiors, or be involved in false rumors, affecting their reputation, integrity and image. The advice to you is to be discreet in the way you speak and behave at work, don't let yourself get into these unnecessary troubles. Just focus on your professional work!</p>
            <p>Even so, you still receive lots of luck and blessings. Thanks to your hard work and previous efforts, you will gain many achievements at work, exactly as planned. Just work seriously, live realistically and don't be negligent or careless, you will have many advantages. Don't trust others too much, take charge of everything yourself!</p>
            <h3>Finance</h3>
            <p>People born in the year of the Goat will also be blessed in terms of money. If you work in the field of trade and service, you will have more regular customers and VIP customers in 2024, sell well and have prestige in the community. Business people also achieve great success and progress in their careers. As for salaried and self-employed people, you will also earn decent income from part-time jobs and side investments. As long as you make the most of the market opportunities, you can make a lot of money. Work hard to innovate and keep up with the times, don't always hide in safety, you will have a prosperous financial season!</p>
            <h3>Love</h3>
            <p>The love life of people born in the year of the Goat in 2024 is very bad, especially for those in love. Single people born in the year of the Goat are introverted and have no interest in love or outside relationships. Therefore, you are at risk of continuing FA for another year. You are quite happy being alone, preferring to immerse yourself in a small world rather than going out on dates and getting to know new people.</p>
            <p>People born in the year of the Goat who are in love and married have many conflicts due to differences in worldview, thinking, and future orientation. This opposition can lead to breakdown. Some people born in the year of the Goat may even suffer violence from their spouse or lover, causing you serious harm both physically and mentally. Think decisively and make the decision to stop if you can't mend, don't hold on for a moment of softness!</p>
            <h3>Health</h3>
            <p>The health of people born in the year of the Goat will be quite gloomy in the coming year. Not only are you seriously ill, you are also at risk of accidents and bloodshed. You will need to increase your awareness of safety precautions, especially when going out, driving or traveling, or doing manual activities.</p>
            <p>Sources: <a href="Link">Link</a></p>
            <p>Translator: Truc Le</p>`;
    } else if (year == 1944 || year == 1956 || year == 1968 || year == 1980 || year == 1992 || year == 2004 || year == 2016) {
        resultsContainer.innerHTML = `<h2>Monkey Age Horoscope in The Year of Dragon 2024</h2>
            <p><strong>Fortune overall:</strong> 8.5/10</p>
            <p><strong>Career:</strong> 9/10</p>
            <p><strong>Finance:</strong> 9/10</p>
            <p><strong>Love:</strong> 9/10</p>
            <p><strong>Health:</strong> 7/10</p>
            <p><strong>Lucky color:</strong> Bronze gold</p>
            <p><strong>Lucky number:</strong> 8</p>
            <h3>Overview</h3>
            <p>2024 is the time of complete fulfillment for people born in the year of the Monkey. Although still in the final stage of the Fan Tai Sui, people born in the year of the Monkey have an extremely lucky year in all aspects from money, career, health to love. What you need to do in the coming time is to live positively, optimistically and not be lazy. There will be many good opportunities coming, you need to work hard and seize the opportunity to achieve sublimation in life.</p>
            <h3>Career</h3>
            <p>People born in the year of the Monkey will develop their full potential in the year of the Dragon at work. You will receive evaluation and rewards from your superiors, building your name, reputation and position in the profession you are pursuing. If you work in government organizations, your courage and decisiveness help you solve public relations crises, providing rare opportunities for advancement. Business people will have a very favorable year in investment and cooperation.</p>
            <h3>Finance</h3>
            <p>A good job also has a positive impact on the finances of people born in the year of the Monkey in the coming year. Office workers are more likely to receive salary increases, commissions and large bonuses. Business people will receive many invitations to collaborate and invest extremely "favorably". Your partners are mostly relatives and close friends. As long as you are willing to cooperate, you can make a fortune in outside investments.</p>
            <h3>Love</h3>
            <p>Love for people born in the year of the Monkey will also bloom in 2024. The God of love will keep an eye on those who are single. You can meet a suitable "lover" through matchmaking and introductions from good friends. You can even get married quite quickly with this person. People who are in love or married will become closer, more intimate and more passionate in the new year. Your chances of getting pregnant or giving birth in the year of the Dragon are also very high. =))))))))</p>
            <h3>Health</h3>
            <p>You will not have many serious health problems in the coming year. If you have children, rest assured that they will live under the careful care of their parents and will not get sick much. For the elderly in the house, you don't need to worry too much. The only thing you need to worry about is your own mental health. Your emotions will be very chaotic and up and down in 2024, making you tired. You will need to rest in moderation, not overworking and thinking too much.</p>
            <p>Sources: <a href="Link">Link</a></p>
            <p>Translator: Truc Le</p>`;
    } else  if (year == 1945 || year == 1957 || year == 1969 || year == 1981 || year == 1993 || year == 2005 || year == 2017) {
        resultsContainer.innerHTML = `<h2>Rooster Age Horoscope in The Year of Dragon 2024</h2>
            <p><strong>Fortune overall:</strong> 8.5/10</p>
            <p><strong>Career:</strong> 9/10</p>
            <p><strong>Finance:</strong> 9/10</p>
            <p><strong>Love:</strong> 8.5/10</p>
            <p><strong>Health:</strong> 8.5/10</p>
            <p><strong>Lucky colors:</strong> Red, black</p>
            <p><strong>Lucky numbers:</strong> 5, 8</p>
            <h3>Overview</h3>
            <p>Sublime, brilliant and filled with joy are the phrases that describe 2024 for Rooster people. Every aspect of your life will be filled with luck and openness. As long as you are willing to invest time and energy in new opportunities, you will receive corresponding rewards, getting results beyond your expectations. However, you should still maintain a cautious, humble attitude and not be subjective or "rest on your victories".</p>
            <h3>Career</h3>
            <p>The career of Rooster people will be favorable and successful in 2024. Your relationships with superiors, colleagues, partners or customers are all very harmonious and happy. If you are looking for a job or unemployed, you will get a new job with a pretty good salary and benefits, worth being satisfied with. Some people born in the year of the Rooster will be promoted and have many promising business and partnership projects. Business people and traders also receive many large orders and contracts. Of course, with the good things comes a huge amount of work and great pressure. You need to prepare for good health!</p>
            <h3>Finance</h3>
            <p>People born in the year of the Rooster will have abundant wealth in the coming year. You will have many new sources of income, achieving huge profits through investment or additional business. The Year of the Dragon is a "golden" time for you to carry out a risky project. However, my advice is to brag less no matter how much money you make to avoid attracting bad people, scammers or thieves.</p>
            <h3>Love</h3>
            <p>Love affairs are also a bright feature in the Year of the Dragon. If you are single, your love life will increase sharply, even when "sitting idly", you still have satellites surrounding you to flirt and pursue you. In general, you will attract a lot of "quality" characters. Please choose wisely and carefully! For those who are in a relationship, love will become more passionate and burning. However, for married people, flirtation and attractiveness can cause you to neglect your marriage and get into trouble with a third person. You will need to adjust your psychology and emotions, turn more towards your other half and show commitment and loyalty. Don't cross the line!</p>
            <h3>Health</h3>
            <p>The health situation of people born in the year of the Rooster, both physically and mentally, will be quite good in the coming year. Your physical strength is generally persistent, full of vitality and always in a cheerful mood. You just need to avoid drinking too much alcohol and limit eating fatty foods!</p>
            <p>Sources: <a href="Link">Link</a></p>
            <p>Translator: Truc Le</p>`;
    } else  if (year == 1946 || year == 1958 || year == 1970 || year == 1982 || year == 1994 || year == 2006 || year == 2018) {
        resultsContainer.innerHTML = `<h2>Dog Age Horoscope in The Year of Dragon 2024</h2>
            <p><strong>Fortune overall:</strong> 4.5/10</p>
            <p><strong>Career:</strong> 6.5/10</p>
            <p><strong>Finance:</strong> 4/10</p>
            <p><strong>Love:</strong> 4/10</p>
            <p><strong>Health:</strong> 4.5/10</p>
            <p><strong>Lucky colors:</strong> Blue, yellow</p>
            <p><strong>Lucky numbers:</strong> 3, 9</p>
            <h3>Overview</h3>
            <p>The fortunes of people born in the year of the Dog will be quite negatively affected by the impact of  Crown Prince star drought in 2024. You will have to think positively, dare to think and be more courageous when encountering difficulties to ensure you stay on the right track. You may suffer a lot of financial loss, often falling into “empty wallets” due to unexpected situations. In the coming year, you also need to pay attention to your health and take good care of yourself.</p>
            <h3>Career</h3>
            <p>The career of people born in the year of the Dog next year will be quite average, not too negative. Salaried workers can experience some positive changes at work, such as frequently traveling everywhere for work, going abroad to work, going from one city to another, and traveling a lot. Just dare to change and take on new tasks, you will still receive worthy results. Try to work harder, concentrate on your work instead of fighting, gossiping or competing with others! Comparing and competing will only get you into unnecessary trouble, affecting your reputation and work performance. If you refuse to stay hidden and stay away from gossip gatherings, you may attract the attention of your superiors and be underestimated, fired or "disgraced". Business people should also work independently, successfully completing planned projects, instead of nitpicking and paying too much attention to competitors!</p>
            <h3>Finance</h3>
            <p>The finances of people born in the year of the Dog will suffer great losses in the year of the Dragon. You need to try to maintain a stable source of income from full-time work, avoid leaving your job impulsively while you haven't found a new job. Only resign when you are sure there is a good job opportunity! Don't think about getting rich with "shortcuts" or expect it to happen overnight! The advice is not to spend money on anything that is uncertain, otherwise the loss will be very heavy.</p>
            <h3>Love</h3>
            <p>The love life of people born in the year of the Dog will also have many obstacles in 2024. If you are single, you may be matched by relatives and friends for potential dates. But unfortunately this relationship may only last in the short term. If you are in love or married, the frequency of arguments and conflicts between you and your other half is very frequent, even serious, causing major rifts.</p>
            <h3>Health</h3>
            <p>Luckily, in the area of physical health, people born in the year of the Dog will not have any major troubles in the coming year. You rarely get sick, no signs of serious illness. However, you may experience many mental problems, boredom, frustration, sadness and even depression. Some people born in the year of the Dog may have to go for medical examination and psychological treatment if the situation becomes more severe. In short, pay more attention to your mental health. You also need to limit long distance travel, because collisions and minor accidents may occur.</p>
            <p>Sources: <a href="Link">Link</a></p>
            <p>Translator: Truc Le</p>`;
    } else if (year == 1947 || year == 1959 || year == 1971 || year == 1983 || year == 1995 || year == 2007 || year == 2019) {
        resultsContainer.innerHTML = `<h2>Pig Age Horoscope in The Year of Dragon 2024</h2>
            <p><strong>Fortune overall:</strong> 8/10</p>
            <p><strong>Career:</strong> 8/10</p>
            <p><strong>Finance:</strong> 7.5/10</p>
            <p><strong>Love:</strong> 9/10</p>
            <p><strong>Health:</strong> 7.5/10</p>
            <p><strong>Lucky colors:</strong> Gray, blue</p>
            <p><strong>Lucky number:</strong> 7</p>
            <h3>Overview</h3>
            <p>People born in the year of the Pig will have a favorable and peaceful year in 2024, overall good, although not astonishingly outstanding, but smooth and happy. Congratulations! Even though you still encounter a few small problems, you don't need to worry, someone will appear to help you at the right time. They can be relatives or friends. Next year, you should not be too idle, instead, learn more new knowledge in the field of study and career.</p>
            <h3>Career</h3>
            <p>In terms of career, people born in the year of the Pig are recognized and appreciated by their superiors, so they will lead and prioritize you. For business people, traders and investors, through social business relationships, you will come into contact with many powerful people with big names in the field you are working in. You can learn many new things, open your eyes and gain more experience through these interactions. This way, your reputation will be further enhanced, you can gain a solid position, and move further in your career.</p>
            <h3>Finance</h3>
            <p>The income of people born in the year of the Pig is quite good. Salaries and bonuses from full-time work as well as profits from business and outside investments have grown strongly. However, it will be difficult for you to accumulate assets and money in the coming year, losing a lot due to having to spend on unexpected expenses. Besides, your "pocket money" can also be negatively affected by family and friends. Be careful not to be scammed, taken advantage of or swindled by acquaintances. If you want to spend money to invest or shop, you need to research carefully.</p>
            <h3>Love</h3>
            <p>The love life of people born in the year of the Pig will be smooth and good in 2024. You will enjoy a happy and fulfilling married life if you are married. For those who are single, your probability of escaping singlehood is very high. You can date quality and potential partners thanks to the introduction of friends and relatives. If you are in a relationship, you and your other half can go further, like getting engaged or getting married in the year of the Dragon.</p>
            <h3>Health</h3>
            <p>The health condition of people born in the year of the Pig is generally stable in the coming year, with no serious problems occurring. Of course, you can still get sick or have a minor injury. What you need to do is stay optimistic when faced with those small troubles! If you are suffering from a long-term chronic disease, you have the opportunity to see a skilled doctor and be able to treat it thoroughly and recover completely. Next year, limit your travel to avoid accidents and collisions!</p>
            <p>Sources: <a href="Link">Link</a></p>
            <p>Translator: Truc Le</p>`;
    } else {
        resultsContainer.innerHTML = "<p>Sorry, we don't have specific content for the year you entered.</p>";
    }
}
