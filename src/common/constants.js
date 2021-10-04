const constants = {
    HOME_PAGE_CAPTION: "A Companion For Your Mental Health",
    SERVICE_SECTION_CAPTION: "Areas Of Speciality",
    FOOTER_CAPTION: "We are dedicated to provide you the best psychiatric consultation for your well being",
    LOCATION: {
        address: {
            line1: 'The Companion Clinic,',
            line2: 'Opposite old private bus stand,',
            line3: 'Kollthumkadavu fish market road,',
            line4: 'Vaikom 686141',
        },
        name: 'The Companion Clinic',
        lat: 9.752307660081689,
        lng: 76.38993833420466
    },
    GOOGLE_API_KEY: "REACT_APP_GM_API_KEY",
    MODAL_CONTENT: {
        HOME_PAGE_CARDS: {
            schoolPrograms: {
                header: 'School Programs',
                content: 'We arrange programs both online and offline. Fees is negotiable. Language of communication - English/Malayalam'
            },
            collegePrograms: {
                header: 'College Programs',
                content: 'We arrange programs both online and offline. Fees is negotiable. Language of communication - English/Malayalam'
            },
            campaigns: {
                header: 'Campaigns',
                content: 'We arrange programs both online and offline. Fees is negotiable. Language of communication - English/Malayalam'
            },
            depression: {
                header: 'Depression',
                content: 'Depression is a common illness worldwide, with more than 264 million people affected(1). Depression is different from usual mood fluctuations and short-lived emotional responses to challenges in everyday life. Especially when long-lasting and with moderate or severe intensity, depression may become a serious health condition. It can cause the affected person to suffer greatly and function poorly at work, at school and in the family. At its worst, depression can lead to suicide. Close to 800 000 people die due to suicide every year. Suicide is the second leading cause of death in 15-29-year-olds.',
            },
            bipolarDisorder: {
                header: 'Bipolar Disorder',
                content: `This disorder affects about 45 million people worldwide1. It typically consists of both manic and depressive episodes separated by periods of normal mood. Manic episodes involve elevated or irritable mood, over-activity, rapid speech, inflated self-esteem and a decreased need for sleep. People who have manic attacks but do not experience depressive episodes are also classified as having bipolar disorder. Effective treatments are available for the treatment of the acute phase of bipolar disorder and the prevention of relapse. These are medicines that stabilize mood. Psychosocial support is an important component of treatment.`,
            },
            moodDisorders: {
                header: 'Mood Disorders in Children',
                content: `A mood disorder is a mental health class that health professionals use to broadly describe all types of depression and bipolar disorders. Children, teens, and adults can have mood disorders. However, children and teens don’t always have the same symptoms as adults. It’s harder to diagnose mood disorders in children because they aren’t always able to express how they feel. Therapy, antidepressants, and support and self-care can help treat mood disorders.`,
            },
            anxiety: {
                header: 'Anxiety',
                content: `Anxiety is a normal reaction to stress and can be beneficial in some situations. It can alert us to dangers and help us prepare and pay attention. Anxiety disorders differ from normal feelings of nervousness or anxiousness, and involve excessive fear or anxiety. Anxiety disorders are the most common of mental disorders and affect nearly 30% of adults at some point in their lives. But anxiety disorders are treatable and a number of effective treatments are available. Treatment helps most people lead normal productive lives.`,
            },
            panicAttacks: {
                header: 'Panic Attacks',
                content: `A panic attack causes sudden, brief feelings of fear and strong physical reactions in response to ordinary, nonthreatening situations. When you’re having a panic attack, you may sweat a lot, have difficulty breathing and feel like your heart is racing. It may feel as if you’re having a heart attack. Panic disorder can develop when you worry too much about having another panic attack or change behaviors to avoid having a panic attack.`,
            },
            ocd: {
                header: 'Obsessive Compulsive disorder(OCD)',
                content: `Obsessive-compulsive disorder (OCD) is a disorder in which people have recurring, unwanted thoughts, ideas or sensations (obsessions) that make them feel driven to do something repetitively (compulsions). The repetitive behaviors, such as hand washing, checking on things or cleaning, can significantly interfere with a person’s daily activities and social interactions.`,
            },
            specificLearningDisorder: {
                header: 'Specific Learning Disorder',
                content: `Specific learning disorder (often referred to as learning disorder or learning disability) is a neurodevelopmental disorder that begins during school-age, although may not be recognized until adulthood. Learning disabilities refers to ongoing problems in one of three areas, reading, writing and math, which are foundational to one’s ability to learn.`,
            },
            adhd: {
                header: 'Attention deficit hyperactivity disorder(ADHD)',
                content: `Attention-deficit/hyperactivity disorder (ADHD) is one of the most common mental disorders affecting children. ADHD also affects many adults. Symptoms of ADHD include inattention (not being able to keep focus), hyperactivity (excess movement that is not fitting to the setting) and impulsivity (hasty acts that occur in the moment without thought). An estimated 8.4% of children and 2.5% of adults have ADHD.1,2 ADHD is often first identified in school-aged children when it leads to disruption in the classroom or problems with schoolwork. It can also affect adults. It is more common among boys than girls.`,
            },
            insomnia: {
                header: 'Insomnia',
                content: `Insomnia is a common sleep disorder. With insomnia, you may have trouble falling asleep, staying asleep, or getting good quality sleep. This happens even though you have the time and the right environment to sleep well. Insomnia interferes with your daily activities, and may make you feel unrested or sleepy during the day. Short-term insomnia may be caused by stress or changes in your schedule or environment. It can last for a few days or weeks. Chronic (long-term) insomnia occurs three or more nights a week, lasts more than three months, and cannot be fully explained by another health problem or a medicine.`,
            }
        }
    },
    FAQ: [
        {
            id: 1,
            title: 'Does Medication help?',
            info: 'Yes, it does. Please consult a psychiatrist before taking medications'
        },
        {
            id: 2,
            title: 'How long should I take medications?',
            info: 'Though the duration varies on a case to case basis, it should be taken alteast for a minimum of six to nine months.'
        },
        {
            id: 3,
            title: 'Will there be any side effects to medicines?',
            info: 'Contrary to the popular belief that psychiatric medications should be avoided at all costs, they are quiet safe when prescribed by a Psychiatrist'
        },
        {
            id: 4,
            title: 'What if people judge me for visiting a Mental Health Professional?',
            info: `When you catch a cold, you visit a physician. Visiting a Psychiatrist is just the same. Mental health issues take a toll on your life just like phsyical illness. So don't ignore it.`
        },
        {
            id: 5,
            title: 'Are my issues going to go away if I wait?',
            info: `No, It usually doesn't. Consulting a mental health professional is the best option`
        },
    ],
    INFO_SECTION: {
        schoolPrograms: {
            id: "schoolP",
            lightBg: true,
            lightText: false,
            lightTextDesc: false,
            // topLine: 'College Programs',
            headline: 'School Programs',
            description: 'Initiative to raise awareness about mental health issues among adolescence. Educational sessions are offered to teachers, parents and students to sensitise them about mental health issues like specific learning disorder, Adhd, substance use, depression and anxiety disorders',
            buttonLabel: 'Learn More',
            imgStart: '',
            img: 'images/img-info-school.jpg',
            alt: 'School Programs'
        },
        collegePrograms: {
            id: "collegeP",
            lightBg: false,
            lightText: true,
            lightTextDesc: true,
            // topLine: 'College Programs',
            headline: 'College Programs',
            description: "Stress, anxiety, depression and substance use are among the rise among college going students. This programme is aimed at offering a helping hand to our young generation",
            buttonLabel: 'Learn More',
            imgStart: 'start',
            img: 'images/img-info-clg.jpg',
            alt: 'College Programs'
        },
        campaigns: {
            id: "campaigns",
            lightBg: true,
            lightText: false,
            lightTextDesc: false,
            headline: 'Campaigns',
            // topLine: 'College Programs',
            description: "Aimed at sensitising the public about mental health through online/offline educational sessions",
            buttonLabel: 'Learn More',
            imgStart: '',
            img: 'images/img-info-campaign.jpg',
            alt: 'Campaigns'
        }
    }
}

export { constants };