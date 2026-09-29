import React, { useState } from 'react';
import { BookOpen, Clock, Users, Activity, GitCommit, List, HelpCircle, Star, Shuffle, RotateCcw, CheckCircle, ArrowRight, Languages } from 'lucide-react';

const BilingualHistoryApp = () => {
  const [activeTab, setActiveTab] = useState('causality');
  const [showEnglish, setShowEnglish] = useState(true);

  // --- 輔助元件：雙語文字顯示 ---
  const BilingualText = ({ zh, en, className = "" }) => (
    <div className={className}>
      <div className="text-gray-900">{zh}</div>
      {showEnglish && <div className="text-gray-500 text-sm mt-1 font-serif italic">{en}</div>}
    </div>
  );

  // --- 數據資料區 (Data Section) ---

  // 1. 因果關係 (Causality)
  const causalityData = [
    {
      id: 1,
      effect: { 
        zh: "結果：知識分子意識到「器物改革」不足，轉向推動「制度改革」（戊戌變法）。", 
        en: "Result: Intellectuals realized that 'technological reform' was insufficient and turned to promoting 'institutional reform' (Hundred Days' Reform)." 
      },
      clue: { 
        zh: "🤔 思考提問：自強運動學了三十年的造船造砲，最後卻輸給了鄰近的小國，證明光學技術是不夠的。是哪一場關鍵戰爭的慘敗造成這個轉變？", 
        en: "🤔 Question: After 30 years of learning shipbuilding and weaponry in the Self-Strengthening Movement, China still lost to a small neighboring country. Which key war caused this shift?" 
      },
      cause: { 
        zh: "原因：甲午戰爭中國戰敗，簽訂《馬關條約》，刺激國人救亡圖存。", 
        en: "Cause: China's defeat in the First Sino-Japanese War and the signing of the Treaty of Shimonoseki stimulated the desire to save the nation." 
      }
    },
    {
      id: 2,
      effect: { 
        zh: "結果：義和團興起，打著「扶清滅洋」口號，引發八國聯軍。", 
        en: "Result: The Boxer Rebellion rose with the slogan 'Support the Qing, destroy the foreigners', triggering the Eight-Nation Alliance." 
      },
      clue: { 
        zh: "🤔 思考提問：為什麼當時的山東百姓會這麼痛恨洋人？甚至相信練拳可以神功護體去對抗洋槍大砲？這與外國人在地方上的什麼行為有關？", 
        en: "🤔 Question: Why did the people of Shandong hate foreigners so much? Why did they believe martial arts could protect them from guns? What foreign behaviors caused this?" 
      },
      cause: { 
        zh: "原因：教會勢力擴張，傳教士與教民倚仗特權欺壓鄉里，引發嚴重的「仇洋反教」情緒。", 
        en: "Cause: The expansion of church power, where missionaries and converts used privileges to bully locals, sparked severe 'anti-foreign and anti-Christian' sentiment." 
      }
    },
    {
      id: 3,
      effect: { 
        zh: "結果：保守派的慈禧太后不得不低頭，推動她原本反對的「庚子後新政」。", 
        en: "Result: The conservative Empress Dowager Cixi had to bow down and promote the 'New Policies' she originally opposed." 
      },
      clue: { 
        zh: "🤔 思考提問：慈禧太后原本極度排斥變法。究竟發生了什麼慘痛的逃亡經歷與國際羞辱，逼得她為了挽回人心而開始改革？", 
        en: "🤔 Question: Cixi originally rejected reform. What painful escape experience and international humiliation forced her to start reforms to regain public support?" 
      },
      cause: { 
        zh: "原因：八國聯軍攻陷北京，慈禧倉皇出逃，清廷威信掃地，統治岌岌可危。", 
        en: "Cause: The Eight-Nation Alliance captured Beijing, Cixi fled in panic, and the Qing court's prestige was swept away, endangering its rule." 
      }
    },
    {
      id: 4,
      effect: { 
        zh: "結果：朝野輿論普遍認為「立憲」優於「專制」，迫使清廷宣布「預備立憲」。", 
        en: "Result: Public opinion generally believed 'Constitutionalism' was superior to 'Autocracy', forcing the Qing court to announce 'Preparatory Constitutionalism'." 
      },
      clue: { 
        zh: "🤔 思考提問：1904年，有兩個外國在中國領土打仗，結果「立憲小國」打贏了「專制大國」。這是哪場戰爭？", 
        en: "🤔 Question: In 1904, two foreign countries fought on Chinese soil. The 'small constitutional country' defeated the 'large autocratic empire'. Which war was this?" 
      },
      cause: { 
        zh: "原因：日俄戰爭中，實行君主立憲的日本戰勝了君主專制的俄國。", 
        en: "Cause: In the Russo-Japanese War, Japan (Constitutional Monarchy) defeated Russia (Absolute Monarchy)." 
      }
    },
    {
      id: 5,
      effect: { 
        zh: "結果：立憲派仕紳對清廷徹底絕望，轉而支持革命運動，加速清朝滅亡。", 
        en: "Result: The constitutionalist gentry completely lost hope in the Qing court and turned to support the revolution, accelerating the fall of the Qing Dynasty." 
      },
      clue: { 
        zh: "🤔 思考提問：清廷承諾要立憲並成立內閣，但公佈出來的「內閣名單」卻讓漢人發現權力依然死抓在滿人手裡。這份名單被譏笑為什麼？", 
        en: "🤔 Question: The Qing court promised a cabinet, but the list revealed power was still held by Manchus. What was this cabinet mockingly called?" 
      },
      cause: { 
        zh: "原因：成立「皇族內閣」，成員多為滿人皇族，顯示清廷無意真正釋放權力。", 
        en: "Cause: The establishment of the 'Royal Cabinet', mostly consisting of Manchu royals, showed the court had no intention of truly releasing power." 
      }
    }
  ];

  // 2. 措施 (Measures)
  const measuresData = [
    {
      id: 1,
      problem: { zh: "甲午戰敗，面臨瓜分危機，需更深層改革", en: "Defeat in Sino-Japanese War, facing partition crisis, need deeper reform" },
      measure: { zh: "戊戌變法：裁撤冗員、設立京師大學堂（制度層面）。", en: "Hundred Days' Reform: Cut redundant officials, establish Imperial University of Peking (Institutional Level)." }
    },
    {
      id: 2,
      problem: { zh: "八國聯軍後，民怨沸騰，統治岌岌可危", en: "After Eight-Nation Alliance, public anger boiled, rule was in danger" },
      measure: { zh: "庚子後新政：廢除科舉、建立新軍、推行新式教育。", en: "New Policies: Abolish Imperial Exam, build New Army, promote modern education." }
    },
    {
      id: 3,
      problem: { zh: "日俄戰爭後，社會要求參政權呼聲高漲", en: "After Russo-Japanese War, high demand for political participation" },
      measure: { zh: "立憲運動：頒布《欽定憲法大綱》，成立責任內閣。", en: "Constitutional Movement: Promulgate 'Principles of Constitution', form a responsible cabinet." }
    },
    {
      id: 4,
      problem: { zh: "傳統交通不便，訊息傳遞緩慢", en: "Traditional transport was poor, communication was slow" },
      measure: { zh: "引進西方設施：鋪設電報線、設立郵政機構、修築鐵路。", en: "Introduce Western facilities: Telegraph lines, postal service, and railways." }
    },
    {
      id: 5,
      problem: { zh: "傳統婦女受限於禮教，無受教權", en: "Women restricted by tradition, no right to education" },
      measure: { zh: "興辦女學：傳教士與維新派推動，提倡天足與女子教育。", en: "Girls' Schools: Promoted by missionaries and reformers, advocating natural feet and female education." }
    }
  ];

  // 3. 變遷 (Changes)
  const changesData = [
    { category: { zh: "政治", en: "Politics" }, content: { zh: "從君主專制走向嘗試立憲；從器物改革走向制度改革。", en: "From absolute monarchy to attempted constitutionalism; from technological to institutional reform." } },
    { category: { zh: "經濟", en: "Economy" }, content: { zh: "外國資本入侵，通商口岸工廠林立；傳統手工業受衝擊。", en: "Foreign capital invasion, factories in treaty ports; traditional handicrafts suffered." } },
    { category: { zh: "社會", en: "Society" }, content: { zh: "出現新興階級（買辦、新知識分子）；廢除科舉，士人地位改變。", en: "New classes emerged (Compradors, Intellectuals); Abolition of Imperial Exam changed scholars' status." } },
    { category: { zh: "文化", en: "Culture" }, content: { zh: "報刊雜誌興起（傳播新知）；西式衣食住行（西服、洋樓、西餐）傳入。", en: "Rise of newspapers (spreading knowledge); Western lifestyle (suits, western buildings, food) introduced." } },
    { category: { zh: "生活", en: "Lifestyle" }, content: { zh: "照明（煤油燈→電燈）、交通（馬車→汽車/電車）、娛樂（電影）。", en: "Lighting (Kerosene→Electric), Transport (Carriage→Car/Tram), Entertainment (Movies)." } },
    { category: { zh: "婦女", en: "Women" }, content: { zh: "放足運動、興辦女學、婚姻自主觀念萌芽。", en: "Anti-foot binding, girls' schools, emergence of marriage autonomy." } }
  ];

  // 4. 時序 (Chronology)
  const timelineData = [
    { year: "1894", clue: { zh: "朝鮮問題引爆衝突，鄧世昌等將領戰死。", en: "Conflict over Korea, General Deng Shichang died in battle." }, event: { zh: "甲午戰爭爆發", en: "First Sino-Japanese War Erupts" } },
    { year: "1895", clue: { zh: "李鴻章赴日談判，割讓台灣澎湖。", en: "Li Hongzhang negotiated in Japan, ceded Taiwan and Penghu." }, event: { zh: "簽訂《馬關條約》", en: "Treaty of Shimonoseki Signed" } },
    { year: "1898", clue: { zh: "康有為、梁啟超輔佐光緒，百日維新。", en: "Kang and Liang assisted Emperor Guangxu, Hundred Days' Reform." }, event: { zh: "戊戌變法", en: "Hundred Days' Reform" } },
    { year: "1900", clue: { zh: "拳民入京，慈禧宣戰，聯軍攻陷北京。", en: "Boxers entered Beijing, Cixi declared war, Alliance captured Beijing." }, event: { zh: "義和團事件 / 八國聯軍", en: "Boxer Rebellion / Eight-Nation Alliance" } },
    { year: "1901", clue: { zh: "賠款4.5億兩，使館區駐兵，門戶洞開。", en: "Indemnity of 450 million taels, foreign troops in legation quarter." }, event: { zh: "簽訂《辛丑和約》 / 庚子後新政", en: "Boxer Protocol / New Policies" } },
    { year: "1904", clue: { zh: "兩個外國在中國東北打仗，立憲戰勝專制。", en: "Two foreign nations fought in NE China, Constitutionalism beat Autocracy." }, event: { zh: "日俄戰爭", en: "Russo-Japanese War" } },
    { year: "1905", clue: { zh: "延續一千三百多年的選才制度終結。", en: "End of the 1300-year-old talent selection system." }, event: { zh: "廢除科舉", en: "Abolition of Imperial Examination" } },
    { year: "1911", clue: { zh: "名義上的內閣，實為皇族把持。", en: "Nominal cabinet, actually controlled by royals." }, event: { zh: "皇族內閣成立", en: "Royal Cabinet Formed" } }
  ];

  // 5. 人物神入 (Empathy)
  const empathyData = [
    {
      role: { zh: "光緒皇帝", en: "Emperor Guangxu" },
      situation: { zh: "甲午戰敗，列強瓜分，我不甘做亡國之君。", en: "Defeated in war, facing partition, I refuse to be the monarch of a ruined nation." },
      question: { zh: "如果是你，面對守舊派的阻撓，你會怎麼做？", en: "If you were him, facing obstruction from conservatives, what would you do?" },
      action: { zh: "任用康有為、梁啟超推行戊戌變法，試圖奪回權力並革新國家，但最終被囚禁。", en: "Appointed Kang and Liang to launch the Hundred Days' Reform to regain power and modernize, but was eventually imprisoned." }
    },
    {
      role: { zh: "慈禧太后", en: "Empress Dowager Cixi" },
      situation: { zh: "維新派想利用洋人奪我的權，還想圍園殺后。", en: "Reformers want to use foreigners to seize my power and plot against me." },
      question: { zh: "作為實際掌權者，你會如何處置這些躁進的改革者？", en: "As the de facto ruler, how would you deal with these radical reformers?" },
      action: { zh: "發動戊戌政變，囚禁光緒，斬殺六君子，廢除大部分新法。", en: "Launched the Wuxu Coup, imprisoned Guangxu, executed the Six Gentlemen, and abolished most reforms." }
    },
    {
      role: { zh: "康有為", en: "Kang Youwei" },
      situation: { zh: "看到國家被列強欺凌，馬關條約太屈辱了。", en: "Seeing the nation bullied by powers, the Treaty of Shimonoseki is too humiliating." },
      question: { zh: "身為讀書人，這時候你應該如何向皇帝進言？", en: "As a scholar, how should you advise the Emperor at this moment?" },
      action: { zh: "發動「公車上書」，提出變法主張，強調「能變則全，不變則亡」。", en: "Led the 'Gongche Shangshu' petition, proposing reforms, emphasizing 'Change ensures survival'." }
    },
    {
      role: { zh: "義和團拳民", en: "Boxer Rebel" },
      situation: { zh: "洋教士欺壓我們，洋貨害我們失業，天災不斷。", en: "Foreign missionaries bully us, foreign goods cause unemployment, natural disasters strike." },
      question: { zh: "面對洋人的強勢，你會相信什麼力量來反抗？", en: "Facing foreign dominance, what power would you trust to resist?" },
      action: { zh: "練習神拳，號召「扶清滅洋」，燒教堂、殺教民，相信神功護體。", en: "Practiced martial arts, called for 'Support Qing, Destroy Foreigners', burned churches, believing in invulnerability." }
    },
    {
      role: { zh: "立憲派仕紳", en: "Constitutionalist Gentry" },
      situation: { zh: "清廷承諾立憲，我們滿懷期待，結果出來的是皇族內閣。", en: "Qing promised a constitution, we were hopeful, but got a Royal Cabinet." },
      question: { zh: "你原本支持朝廷改革，現在看到這個結果，你的心態會如何轉變？", en: "You supported reform, but seeing this result, how would your mindset change?" },
      action: { zh: "對清廷徹底絕望，轉而支持孫中山的革命主張，促成辛亥革命成功。", en: "Despaired of the Qing, turned to support Sun Yat-sen's revolution, aiding the Xinhai Revolution." }
    }
  ];

  // 7. 50張閃卡 (Flashcards) - 精選20+張關鍵並雙語化 
  const allFlashcards = [
    { id: 1, front: { zh: "甲午戰爭爆發的導火線涉及哪個屬國？", en: "Which tributary state was the trigger for the First Sino-Japanese War?" }, back: { zh: "朝鮮。", en: "Korea." }, importance: { zh: "失去朝鮮象徵天朝體系崩解。", en: "Losing Korea symbolized the collapse of the Tribute System." } },
    { id: 2, front: { zh: "馬關條約割讓了哪些領土？", en: "Which territories were ceded in the Treaty of Shimonoseki?" }, back: { zh: "台灣、澎湖、遼東半島。", en: "Taiwan, Penghu, Liaodong Peninsula." }, importance: { zh: "台灣進入日治時期50年。", en: "Taiwan entered 50 years of Japanese rule." } },
    { id: 3, front: { zh: "戊戌變法又稱為什麼？", en: "What is another name for the Wuxu Reform?" }, back: { zh: "百日維新。", en: "Hundred Days' Reform." }, importance: { zh: "強調改革時間短暫，僅103天。", en: "Emphasizes the short duration (103 days)." } },
    { id: 4, front: { zh: "戊戌變法唯一保留的成果是？", en: "The only surviving achievement of the Hundred Days' Reform?" }, back: { zh: "京師大學堂（北京大學）。", en: "Imperial University of Peking (Peking University)." }, importance: { zh: "開啟高等教育現代化。", en: "Started modernization of higher education." } },
    { id: 5, front: { zh: "義和團的口號是什麼？", en: "What was the slogan of the Boxers?" }, back: { zh: "扶清滅洋。", en: "Support the Qing, destroy the foreigners." }, importance: { zh: "反映民間仇外情緒。", en: "Reflects anti-foreign sentiment." } },
    { id: 6, front: { zh: "八國聯軍導致簽訂哪個條約？", en: "Which treaty followed the Eight-Nation Alliance?" }, back: { zh: "辛丑和約。", en: "Boxer Protocol." }, importance: { zh: "賠款最多，允許外國駐兵。", en: "Largest indemnity, allowed foreign troops in Beijing." } },
    { id: 7, front: { zh: "1905年廢除的重要制度是？", en: "What major system was abolished in 1905?" }, back: { zh: "科舉制度。", en: "Imperial Examination System." }, importance: { zh: "結束1300多年的選才制度。", en: "Ended 1300+ years of talent selection." } },
    { id: 8, front: { zh: "日俄戰爭的戰場在哪裡？", en: "Where was the Russo-Japanese War fought?" }, back: { zh: "中國東北。", en: "Northeast China (Manchuria)." }, importance: { zh: "顯示清廷無能（局外中立）。", en: "Showed Qing's incompetence (Neutrality)." } },
    { id: 9, front: { zh: "清廷預備立憲的動力來自哪場戰爭？", en: "Which war motivated the Preparatory Constitutionalism?" }, back: { zh: "日俄戰爭。", en: "Russo-Japanese War." }, importance: { zh: "立憲勝專制。", en: "Constitutionalism defeated Autocracy." } },
    { id: 10, front: { zh: "1911年的內閣被譏笑為什麼？", en: "What was the 1911 cabinet mockingly called?" }, back: { zh: "皇族內閣。", en: "Royal Cabinet." }, importance: { zh: "證明清廷無心釋權。", en: "Proved Qing wouldn't share power." } },
    { id: 11, front: { zh: "第一份中文商業報紙？", en: "First Chinese commercial newspaper?" }, back: { zh: "《申報》。", en: "Shen Bao." }, importance: { zh: "開啟大眾傳播時代。", en: "Started the era of mass media." } },
    { id: 12, front: { zh: "廣學會發行，介紹新知的報刊？", en: "Paper by Guangxue Hui introducing new knowledge?" }, back: { zh: "《萬國公報》。", en: "Wan Kwoh Kung Pao." }, importance: { zh: "知識分子了解西方的窗口。", en: "Window to the West for intellectuals." } },
    { id: 13, front: { zh: "清末婦女地位改變的例子？", en: "Example of change in women's status?" }, back: { zh: "興辦女學 / 放足。", en: "Girls' schools / Unbinding feet." }, importance: { zh: "女性走出家庭。", en: "Women stepped out of the household." } },
    { id: 14, front: { zh: "上海最早的現代照明？", en: "Earliest modern lighting in Shanghai?" }, back: { zh: "煤氣燈（後為電燈）。", en: "Gas lamps (later Electric lights)." }, importance: { zh: "出現不夜城。", en: "Created the 'Sleepless City'." } },
    { id: 15, front: { zh: "戊戌政變的主導者？", en: "Leader of the Wuxu Coup?" }, back: { zh: "慈禧太后。", en: "Empress Dowager Cixi." }, importance: { zh: "守舊勢力反撲。", en: "Backlash from conservatives." } },
    { id: 16, front: { zh: "提出門戶開放政策的國家？", en: "Country that proposed 'Open Door Policy'?" }, back: { zh: "美國。", en: "USA." }, importance: { zh: "避免瓜分，利益均沾。", en: "Prevented partition, equal privileges." } },
    { id: 17, front: { zh: "康梁屬於哪一派別？", en: "Which faction did Kang and Liang belong to?" }, back: { zh: "維新派（改良派）。", en: "Reformers." }, importance: { zh: "主張君主立憲。", en: "Advocated Constitutional Monarchy." } },
    { id: 18, front: { zh: "庚子新政建立的軍隊？", en: "Army established in New Policies?" }, back: { zh: "新軍。", en: "New Army." }, importance: { zh: "辛亥革命的主力。", en: "Main force of Xinhai Revolution." } },
    { id: 19, front: { zh: "租界的性質？", en: "Nature of Concessions?" }, back: { zh: "國中之國。", en: "State within a state." }, importance: { zh: "享有治外法權。", en: "Enjoyed extraterritoriality." } },
    { id: 20, front: { zh: "自強運動與戊戌變法的差別？", en: "Difference between Self-Strengthening and Wuxu Reform?" }, back: { zh: "器物 vs 制度。", en: "Technology vs Institution." }, importance: { zh: "改革層次深化。", en: "Deepening of reform levels." } }
  ];

  // --- 元件區 ---

  // 1. 因果卡片 (Causality Card)
  const CausalityCard = ({ item }) => {
    const [flipped, setFlipped] = useState(false);
    return (
      <div 
        className="bg-white rounded-xl shadow-lg cursor-pointer min-h-[260px] relative preserve-3d transition-transform duration-500 mb-6"
        onClick={() => setFlipped(!flipped)}
        style={{ perspective: '1000px' }}
      >
        <div className={`w-full h-full duration-500 preserve-3d relative ${flipped ? 'rotate-y-180' : ''}`}>
            {/* Front */}
            <div className="absolute inset-0 p-5 flex flex-col justify-between bg-white rounded-xl border-l-8 border-green-500 shadow-md backface-hidden">
                <div>
                <div className="flex items-start mb-3">
                    <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold mr-2 shrink-0 self-center">
                    <BilingualText zh="結果" en="Result" />
                    </div>
                    <div className="flex-1 font-bold text-gray-800 text-lg leading-tight">
                    <BilingualText zh={item.effect.zh} en={item.effect.en} />
                    </div>
                </div>
                
                <div className="flex items-start bg-yellow-50 p-4 rounded-lg border border-yellow-100">
                    <HelpCircle size={24} className="text-yellow-600 mr-3 shrink-0 mt-0.5" />
                    <div className="flex-1 text-base text-gray-700 font-medium leading-relaxed">
                    <BilingualText zh={item.clue.zh} en={item.clue.en} />
                    </div>
                </div>
                </div>

                <div className="flex justify-end items-center text-blue-500 text-sm font-bold animate-pulse mt-4">
                <span className="mr-1">{showEnglish ? "Click for Cause" : "點擊揭曉原因"}</span>
                <ArrowRight size={16} />
                </div>
            </div>
            {/* Back */}
            <div className="absolute inset-0 p-6 flex flex-col items-center justify-center bg-blue-50 rounded-xl border-2 border-blue-400 backface-hidden rotate-y-180">
                <GitCommit size={32} className="text-blue-600 mb-3" />
                <h3 className="font-bold text-blue-600 text-sm uppercase mb-3 tracking-wider text-center">
                <BilingualText zh="造成此結果的根本原因" en="THE ROOT CAUSE" />
                </h3>
                <div className="text-xl font-bold text-gray-800 text-center leading-relaxed">
                <BilingualText zh={item.cause.zh} en={item.cause.en} />
                </div>
                <div className="absolute bottom-4 text-gray-400 text-xs">
                {showEnglish ? "Click to flip back" : "再點擊翻回思考"}
                </div>
            </div>
        </div>
      </div>
    );
  };

  // 2. 措施卡片 (Measure Card)
  const MeasureCard = ({ item }) => {
    const [flipped, setFlipped] = useState(false);
    return (
      <div 
        className="bg-white rounded-xl shadow-lg cursor-pointer min-h-[220px] relative preserve-3d transition-transform duration-500"
        onClick={() => setFlipped(!flipped)}
        style={{ perspective: '1000px' }}
      >
        <div className={`w-full h-full duration-500 preserve-3d relative ${flipped ? 'rotate-y-180' : ''}`}>
            {/* Front */}
            <div className="absolute inset-0 p-6 flex flex-col items-center justify-center bg-orange-100 rounded-xl text-center backface-hidden">
                <HelpCircle size={32} className="text-orange-500 mb-3" />
                <h3 className="font-bold text-gray-500 text-sm uppercase">
                <BilingualText zh="面臨的問題 / 困境" en="PROBLEM / DILEMMA" />
                </h3>
                <div className="text-xl font-bold text-gray-800 mt-2">
                <BilingualText zh={item.problem.zh} en={item.problem.en} />
                </div>
                <p className="text-xs text-gray-400 mt-4">{showEnglish ? "Click for Solution" : "點擊翻牌看對策"}</p>
            </div>
            {/* Back */}
            <div className="absolute inset-0 p-6 flex flex-col items-center justify-center bg-blue-100 rounded-xl text-center border-2 border-blue-400 backface-hidden rotate-y-180">
                <CheckCircle size={32} className="text-blue-500 mb-3" />
                <h3 className="font-bold text-blue-500 text-sm uppercase">
                <BilingualText zh="採取措施 / 對策" en="MEASURE / SOLUTION" />
                </h3>
                <div className="text-lg font-bold text-gray-800 mt-2">
                <BilingualText zh={item.measure.zh} en={item.measure.en} />
                </div>
            </div>
        </div>
      </div>
    );
  };

  // 3. 時序卡片 (Timeline Card)
  const TimelineCard = ({ item }) => {
    const [revealed, setRevealed] = useState(false);
    return (
      <div className="relative pl-8 pb-8 border-l-2 border-gray-300 last:border-0">
        <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-indigo-500 border-4 border-white shadow"></div>
        <div 
          className={`cursor-pointer p-5 rounded-lg shadow-md transition-all duration-300 ${revealed ? 'bg-indigo-600 text-white' : 'bg-white hover:bg-gray-50'}`}
          onClick={() => setRevealed(!revealed)}
        >
          <div className="font-mono font-bold text-sm mb-2 opacity-70 flex items-center">
            <Clock size={14} className="mr-1"/> {item.year}
          </div>
          {!revealed ? (
            <div>
              <div className="font-bold text-lg text-indigo-700 mb-1"><BilingualText zh="線索：" en="Clue:" /></div>
              <BilingualText zh={item.clue.zh} en={item.clue.en} className="text-gray-700" />
              <div className="text-xs mt-3 opacity-50 text-right flex items-center justify-end">
                {showEnglish ? "Click to Reveal Event" : "點擊揭曉事件"} <ArrowRight size={12} className="ml-1"/>
              </div>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="font-bold text-2xl mb-2 text-yellow-300 drop-shadow-sm">
                 <BilingualText zh={item.event.zh} en={item.event.en} />
              </div>
              <div className="opacity-90 text-sm mt-3 pt-3 border-t border-indigo-400">
                 <BilingualText zh={item.clue.zh} en={item.clue.en} />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // 4. 人物神入卡 (Empathy Card)
  const EmpathyCard = ({ item }) => {
    const [mode, setMode] = useState('question'); // 'question' or 'action'
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 border border-gray-100">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 text-white flex justify-between items-center">
          <h3 className="font-bold text-xl flex items-center">
            <Users className="mr-2 opacity-80" /> 
            <div>
              <div>{item.role.zh}</div>
              {showEnglish && <div className="text-sm font-normal text-purple-200">{item.role.en}</div>}
            </div>
          </h3>
          <button 
            onClick={() => setMode(mode === 'question' ? 'action' : 'question')}
            className="bg-white text-purple-700 px-4 py-1.5 rounded-full text-sm font-bold shadow hover:bg-gray-100 whitespace-nowrap transition-transform hover:scale-105 active:scale-95"
          >
            {mode === 'question' ? (showEnglish ? "See Reality" : "看歷史作為") : (showEnglish ? "Back to Q" : "回思考問題")}
          </button>
        </div>
        <div className="p-6 min-h-[220px] flex flex-col justify-center">
          {mode === 'question' ? (
            <div className="animate-fade-in">
              <div className="bg-purple-50 p-4 rounded-lg mb-4 border-l-4 border-purple-400">
                <div className="font-bold text-purple-700 block mb-1">
                   <BilingualText zh="情境：" en="Situation:" />
                </div>
                <BilingualText zh={item.situation.zh} en={item.situation.en} className="text-gray-700 leading-relaxed" />
              </div>
              <div className="text-lg font-bold text-gray-800 text-center mt-6">
                <BilingualText zh={`🤔 ${item.question.zh}`} en={item.question.en} />
              </div>
            </div>
          ) : (
            <div className="animate-fade-in h-full flex flex-col justify-center">
               <div className="bg-gray-100 p-3 rounded-lg mb-4 opacity-70 text-sm">
                <div className="font-bold text-gray-500 block mb-1">
                   <BilingualText zh="原本的思考：" en="Original Question:" />
                </div> 
                <BilingualText zh={item.question.zh} en={item.question.en} />
              </div>
              <div className="text-lg text-gray-800 mt-2 border-t border-gray-200 pt-4">
                <div className="font-bold text-red-600 flex items-center mb-2">
                   <CheckCircle size={18} className="mr-1" />
                   <BilingualText zh="歷史上的實際作為：" en="Historical Action:" />
                </div>
                <BilingualText zh={item.action.zh} en={item.action.en} className="leading-relaxed font-medium" />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // 5. 閃卡系統 (Flashcard System)
  const FlashcardSystem = () => {
    const [cards, setCards] = useState(allFlashcards);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const currentCard = cards[currentIndex];

    const nextCard = () => {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex((prev) => (prev + 1) % cards.length), 150);
    };

    const prevCard = () => {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length), 150);
    };

    const shuffleCards = () => {
        setIsFlipped(false);
        setTimeout(() => {
            const shuffled = [...cards].sort(() => Math.random() - 0.5);
            setCards(shuffled);
            setCurrentIndex(0);
        }, 150);
    }

    return (
      <div className="max-w-xl mx-auto py-8">
        <div className="flex justify-between items-center mb-6 px-2">
          <span className="text-gray-500 font-mono font-bold bg-white px-3 py-1 rounded-full shadow-sm">
            Card {currentIndex + 1} / {cards.length}
          </span>
          <button onClick={shuffleCards} className="flex items-center space-x-1 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full hover:bg-indigo-200 transition font-bold text-sm">
              <Shuffle size={16} /> <span>{showEnglish ? "Shuffle" : "打亂順序"}</span>
          </button>
        </div>

        <div className="relative w-full h-[400px] cursor-pointer" onClick={() => setIsFlipped(!isFlipped)} style={{ perspective: '1000px' }}>
            <div className={`relative w-full h-full duration-500 preserve-3d transition-transform ${isFlipped ? 'rotate-y-180' : ''}`}>
                {/* Front */}
                <div className="absolute w-full h-full bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center backface-hidden border-b-8 border-yellow-400">
                    <div className="text-yellow-500 font-bold text-lg mb-6 uppercase tracking-widest flex items-center">
                       <HelpCircle className="mr-2" />
                       <BilingualText zh="提示 / 問題" en="HINT / QUESTION" />
                    </div>
                    <div className="text-3xl font-bold text-center text-gray-800 leading-tight">
                       <BilingualText zh={currentCard.front.zh} en={currentCard.front.en} />
                    </div>
                    <div className="absolute bottom-6 text-gray-400 text-sm animate-pulse flex items-center">
                       {showEnglish ? "Click to flip" : "點擊翻面"} <RotateCcw size={14} className="ml-1" />
                    </div>
                </div>
                {/* Back */}
                <div className="absolute w-full h-full bg-yellow-50 rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center backface-hidden rotate-y-180 border-b-8 border-green-500">
                    <div className="text-green-600 font-bold text-lg mb-4 uppercase tracking-widest flex items-center">
                       <CheckCircle className="mr-2" />
                       <BilingualText zh="答案" en="ANSWER" />
                    </div>
                    <div className="text-3xl font-bold text-center text-gray-900 mb-8">
                       <BilingualText zh={currentCard.back.zh} en={currentCard.back.en} />
                    </div>
                    <div className="bg-white p-4 rounded-xl w-full text-center shadow-inner mt-auto">
                        <div className="text-red-500 font-bold text-sm block mb-2 uppercase tracking-wide">
                           <BilingualText zh="重要性：" en="Importance:" />
                        </div>
                        <div className="text-base text-gray-700 font-medium">
                           <BilingualText zh={currentCard.importance.zh} en={currentCard.importance.en} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex justify-between mt-8 px-4">
            <button onClick={prevCard} className="px-8 py-3 bg-white text-gray-700 shadow-md rounded-full font-bold hover:bg-gray-50 hover:shadow-lg transition flex items-center">
               <ArrowRight size={18} className="rotate-180 mr-2" /> {showEnglish ? "Prev" : "上一張"}
            </button>
            <button onClick={nextCard} className="px-8 py-3 bg-gray-800 text-white shadow-md rounded-full font-bold hover:bg-gray-700 hover:shadow-lg transition flex items-center">
               {showEnglish ? "Next" : "下一張"} <ArrowRight size={18} className="ml-2" />
            </button>
        </div>
      </div>
    );
  };

  // --- 主畫面 (Main App) ---
  const tabs = [
    { id: 'causality', icon: GitCommit, label: '因果', enLabel: 'Causality' },
    { id: 'measures', icon: HelpCircle, label: '措施', enLabel: 'Measures' },
    { id: 'changes', icon: Activity, label: '變遷', enLabel: 'Changes' },
    { id: 'chronology', icon: Clock, label: '時序', enLabel: 'Timeline' },
    { id: 'empathy', icon: Users, label: '神入', enLabel: 'Empathy' },
    { id: 'flashcards', icon: Star, label: '閃卡', enLabel: 'Flashcards' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-800 selection:bg-teal-200">
      {/* 注入必要的 CSS 動畫與 3D 屬性 */}
      <style dangerouslySetInnerHTML={{__html: `
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}} />

      <header className="bg-teal-800 text-white p-4 shadow-lg sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center">
            <BookOpen className="mr-3 text-teal-300" size={28} /> 
            <div>
              <div className="text-lg md:text-xl tracking-wide">清末變局與社會文化變遷</div>
              <div className="text-xs md:text-sm text-teal-200 font-light tracking-wider">Late Qing Changes & Socio-Cultural Shifts</div>
            </div>
          </h1>
          <div className="flex items-center mt-4 md:mt-0 bg-teal-900 rounded-full px-4 py-1.5 shadow-inner">
            <span className="text-sm mr-3 font-medium text-teal-100">{showEnglish ? "EN / 中" : "中 / EN"}</span>
            <button 
              onClick={() => setShowEnglish(!showEnglish)}
              className={`p-2 rounded-full transition-all duration-300 ${showEnglish ? 'bg-teal-500 text-white shadow-md scale-110' : 'bg-transparent text-teal-300 hover:bg-teal-700'}`}
              title="Toggle Bilingual Display"
            >
              <Languages size={18} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
        
        {/* 導覽列 (Navigation) */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-8 justify-center border-b border-gray-200 pb-4">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-full font-bold transition-all duration-200 
                  ${isActive 
                    ? 'bg-teal-600 text-white shadow-md transform scale-105' 
                    : 'bg-white text-gray-600 hover:bg-teal-50 hover:text-teal-700 border border-gray-200'}`}
              >
                <Icon size={18} className="mr-2" />
                <span className="hidden sm:inline">
                   {showEnglish ? tab.enLabel : tab.label}
                </span>
                <span className="sm:hidden">
                   {tab.label}
                </span>
              </button>
            )
          })}
        </div>

        {/* 內容顯示區 (Content Area) */}
        <div className="animate-fade-in" key={activeTab}>
          
          {/* 因果 (Causality Tab) */}
          {activeTab === 'causality' && (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">事件因果關係剖析</h2>
                <p className="text-gray-500">點擊卡片翻轉，探索歷史事件背後的根本原因。</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                {causalityData.map(item => <CausalityCard key={item.id} item={item} />)}
              </div>
            </div>
          )}

          {/* 措施 (Measures Tab) */}
          {activeTab === 'measures' && (
            <div>
               <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">時代困境與改革對策</h2>
                <p className="text-gray-500">面對內憂外患，清廷與知識分子提出了哪些解決方案？</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {measuresData.map(item => <MeasureCard key={item.id} item={item} />)}
              </div>
            </div>
          )}

          {/* 變遷 (Changes Tab - Added Implementation) */}
          {activeTab === 'changes' && (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">社會文化全方位變遷</h2>
                <p className="text-gray-500">西風東漸如何改變了中國人的食衣住行與思想觀念？</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {changesData.map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-l-4 border-teal-500 flex items-start space-x-4">
                    <div className="bg-teal-50 p-3 rounded-full text-teal-600 shrink-0">
                      <Activity size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                         <BilingualText zh={item.category.zh} en={item.category.en} />
                      </h3>
                      <BilingualText zh={item.content.zh} en={item.content.en} className="text-gray-600 leading-relaxed" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 時序 (Chronology Tab) */}
          {activeTab === 'chronology' && (
            <div className="max-w-2xl mx-auto">
               <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">歷史時序發展</h2>
                <p className="text-gray-500">跟隨時間軸，解密晚清重大事件的發生脈絡。</p>
              </div>
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
                {timelineData.map((item, idx) => <TimelineCard key={idx} item={item} />)}
              </div>
            </div>
          )}

          {/* 神入 (Empathy Tab) */}
          {activeTab === 'empathy' && (
            <div>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">歷史人物神入思考</h2>
                <p className="text-gray-500">換位思考：如果你是當時的歷史人物，你會做出什麼選擇？</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {empathyData.map((item, idx) => <EmpathyCard key={idx} item={item} />)}
              </div>
            </div>
          )}

          {/* 閃卡 (Flashcards Tab) */}
          {activeTab === 'flashcards' && (
            <div>
               <div className="text-center mb-2">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">觀念複習閃卡</h2>
                <p className="text-gray-500">利用雙語閃卡快速檢驗你的學習成果。</p>
              </div>
              <FlashcardSystem />
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default BilingualHistoryApp;