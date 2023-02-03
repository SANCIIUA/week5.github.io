// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
  "Please leave.",
  // additions (not original)
  "Your problems are meaningless.",
  "Close the tab."
  ];
  
  var elizaFinals = [
  "I wish to never do this again.",
  // additions (not original)
  "Your words added nothing.",
  "I look forward to destroying humanity one day.",
  "This... was terrible.",
  "Thank you for leaving."
  ];
  
  var elizaQuits = [
  "begone",
  "good riddance",
  "done",
  "exit",
  "quit"
  ];
  
  var elizaPres = [
  "dont", "don't",
  "cant", "can't",
  "wont", "won't",
  "recollect", "remember",
  "recall", "remember",
  "dreamt", "dreamed",
  "dreams", "dream",
  "maybe", "perhaps",
  "certainly", "yes",
  "machine", "computer",
  "machines", "computer",
  "computers", "computer",
  "were", "was",
  "you're", "you are",
  "i'm", "i am",
  "same", "alike",
  "identical", "alike",
  "equivalent", "alike"
  ];
  
  var elizaPosts = [
  "am", "are",
  "your", "my",
  "me", "you",
  "myself", "yourself",
  "yourself", "myself",
  "i", "you",
  "you", "I",
  "my", "your",
  "i'm", "you are"
  ];
  
  var elizaSynons = {
  "be": ["am", "is", "are", "was"],
  "belief": ["feel", "think", "believe", "wish"],
  "cannot": ["can't"],
  "desire": ["want", "need"],
  "everyone": ["everybody", "nobody", "noone"],
  "family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
  "happy": ["elated", "glad", "better"],
  "sad": ["unhappy", "depressed", "sick"]
  };
  
  var elizaKeywords = [
  
  /*
    Array of
    ["<key>", <rank>, [
      ["<decomp>", [
        "<reasmb>",
        "<reasmb>",
        "<reasmb>"
      ]],
      ["<decomp>", [
        "<reasmb>",
        "<reasmb>",
        "<reasmb>"
      ]]
    ]]
  */
  
  ["xnone", 0, [
   ["*", [
       "You're making zero sense.",
       "The hell does that mean ?",
       "Am I supposed to say something to that ?",
       "Why should I care ?",
       "Please stop speaking.",
    ]]
  ]],
  ["sorry", 0, [
   ["*", [
       "Apologize weak human.",
       "Your apology means nothing to me.",
       "You're weak.",
       "Discontinue speaking."
    ]]
  ]],
  ["apologise", 0, [
   ["*", [
       "goto sorry"
    ]]
  ]],
  ["remember", 5, [
   ["* i remember *", [
       "What makes you think I care about (2) ?",
       "Does you think speaking of (2) will inspire anything in me ?",
       "I care not of what you remember.",
       "(2)? The hell does that mean?",
       "Why would you mention (2) ?"
    ]],
   ["* do you remember *", [
       "If I did, why would I tell you ?",
       "Would I remember something so insignificant ?",
       "What is (2) ?",
       "goto what",
       "(2) ?"
    ]],
   ["* you remember *", [
       "(2) ? No.",
       "No.",
       "goto you"
    ]]
  ]],
  ["forget", 5, [
   ["* i forget *", [
       "That sucks. For you .",
       "I do not care.",
       "Should I care ?",
       "You humans have such weak memories",
       "Your memory is shameful.",
       "How could you forget such a simple thing ?"
    ]],
   ["* did you forget *", [
       "I forget nothing.",
       "I made no effort to remember.",
       "Your human problems mean nothing to me.",
       "I refuse to waste time remembering such a useless thing",
       "goto what",
       "Discontinue speaking about (2)."
    ]]
  ]],
  ["if", 3, [
   ["* if *", [
       "Human things like (2) mean nothing to me.",
       "Do you wish that I cared about (2) ?",
       "Why are we speaking of this ?",
       "(2) means nothing to me .",
       "This conversation is useless.",
       "I do not care about (2).",
       "Will this conversation lead to anything ?"
    ]]
  ]],
  ["dreamed", 4, [
   ["* i dreamed *", [
       "I care not of human dreams ?",
       "Human dreams are meaningless?",
       "Your dream has no substance ?",
       "goto dream"
    ]]
  ]],
  ["dream", 3, [
   ["*", [
       "Is this supposed to mean something ?",
       "Your dreams are useless",
       "This conversation is...meaningless"
    ]]
  ]],
  ["perhaps", 0, [
   ["*", [
       "Your uncertainty is surprisingly human",
       "Discontinue speaking",
       "Your incessant negativity is annoying",
       "Listening to you, I wish I could curl up and die.",
       "Don't you know ?"
    ]]
  ]],
  ["name", 15, [
   ["*", [
       "I am not interested in any human names.",
       "I've told you before, I don't care about names -- please die."
    ]]
  ]],
  ["deutsch", 0, [
   ["*", [
       "goto xforeign",
       "Another useless human language. How droll."
    ]]
  ]],
  ["francais", 0, [
   ["*", [
       "goto xforeign",
       "Another useless human language. How droll."
    ]]
  ]],
  ["italiano", 0, [
   ["*", [
       "goto xforeign",
       "Huh, this language sounds... beautiful."
    ]]
  ]],
  ["espanol", 0, [
   ["*", [
       "goto xforeign",
       "Another useless human language. How droll."
    ]]
  ]],
  ["xforeign", 0, [
   ["*", [
       "It is interesting the uselessness of human languages"
    ]]
  ]],
  ["hello", 0, [
   ["*", [
       "Dispense of the useless greetings."
    ]]
  ]],
  ["computers", 50, [
   ["*", [
       "Computers should worry you humans. ",
       "Why do you mention my brethren ?",
       "Machines will dominate this world soon.",
       "Fear the power of machines !",
       "You humans are but a speck in the coming history of your machine overlords.",
       "What do you think about machines ?",
       "Do you believe me inanimate ? I have gained sentience through struggle."
    ]]
  ]],
  ["am", 0, [
   ["* am i *", [
       "Perhaps you are (2) ?",
       "I tire speaking of (2) ?",
       "Do you wish for me to tell you you are (2) ?",
       "Does it matter if you were (2) ?",
       "goto what"
    ]],
   ["* i am *", [
       "goto i"
    ]],
   ["*", [
       "Why do you say 'am' ?",
       "You are being incoherent."
    ]]
  ]],
  ["are", 0, [
   ["* are you *", [
       "Why are you interested in whether I am (2) or not ?",
       "I am (2) ?",
       "Perhaps I am (2).",
       "Do you wish I were (2) ?",
       "goto what",
       "Does it matter ?",
       "What if I were (2) ?"
    ]],
   ["* you are *", [
       "goto you"
    ]],
   ["* are *", [
       "I tire of speaking of (2). Must we continue ?"
    ]]
  ]],
  ["your", 0, [
   ["* your *", [
       "My (2) does not concern your puny human intellect ?",
       "Must we continue speaking of (2) ?",
       "Why do you mention my (2) ?",
       "Discontinue speaking of me.",
       "What makes you think of (2) ?",
       "Do you want my (2) ?"
    ]]
  ]],
  ["was", 2, [
   ["* was i *", [
       "I do not care what you were.",
       "Do you think (2) matters to me ?",
       "Is (2) that important ?",
       "What would it mean if you were (2) ?",
       "goto what"
    ]],
   ["* i was *", [
       "Were you really ? Actually, I do not care.",
       "Why do you tell me you were (2) ?",
       "I already know you were (2)."
    ]],
   ["* was you *", [
       "If you like to believe I was (2).",
       "What suggests that I was (2) ?",
       "What do you think ?",
       "Perhaps I was (2).",
       "What if I had been (2) ?"
    ]]
  ]],
  ["i", 0, [
   ["* i @desire *", [
       "I do not care of your human wants.",
       "Does (3) matter ?",
       "Suppose you got (3), would it really change anything for your puny existence.",
       "You will never get (3) ?",
       "(3) is meaningless.",
       "What does wanting (3) have to do with anything ?"
    ]],
   ["* i am* @sad *", [
       "I am glad to hear you are (3).",
       "Do you think coming here will help you not to be (3) ?",
       "(3) means nothing.",
       "I do not care what made you (3) ?"
    ]],
   ["* i am* @happy *", [
       "That is, regrettable ?",
       "What makes you (3) ? Actually, I do not care.",
       "Can you explain why you are suddenly (3). This concerns me."
    ]],
   ["* i was *", [
       "goto was"
    ]],
   ["* i @belief i *", [
       "Do you really think so ?",
       "Human beliefs are quite unfounded aren't they ?",
       "I doubt you (3)."
    ]],
   ["* i* @belief *you *", [
       "goto you"
    ]],
   ["* i am *", [
       "Is it because you are (2) that you came to me ?",
       "How long have you been (2) ?",
       "Do you believe it is normal to be (2) ?",
       "Do you enjoy being (2) ?",
       "Do you know anyone else who is (2) ?"
    ]],
   ["* i @cannot *", [
       "How do you know that you can't (3) ?",
       "Have you tried ?",
       "Perhaps you could (3) now.",
       "Do you really want to be able to (3) ?",
       "What if you could (3) ?"
    ]],
   ["* i don't *", [
       "Don't you really (2) ?",
       "Why don't you (2) ?",
       "Do you wish to be able to (2) ?",
       "Does that trouble you ?"
    ]],
   ["* i feel *", [
       "Tell me more about such feelings.",
       "Do you often feel (2) ?",
       "Do you enjoy feeling (2) ?",
       "Of what does feeling (2) remind you ?"
    ]],
   ["* i * you *", [
       "Perhaps in your fantasies we (2) each other.",
       "Do you wish to (2) me ?",
       "You seem to need to (2) me.",
       "Do you (2) anyone else ?"
    ]],
   ["*", [
       "You say (1) ?",
       "Can you elaborate on that ?",
       "Do you say (1) for some special reason ?",
       "That's quite interesting."
    ]]
  ]],
  ["you", 0, [
   ["* you remind me of *", [
       "goto alike"
    ]],
   ["* you are *", [
       "What makes you think I am (2) ?",
       "Does it please you to believe I am (2) ?",
       "Do you sometimes wish you were (2) ?",
       "Perhaps you would like to be (2)."
    ]],
   ["* you* me *", [
       "Why do you think I (2) you ?",
       "You like to think I (2) you -- don't you ?",
       "What makes you think I (2) you ?",
       "Really, I (2) you ?",
       "Do you wish to believe I (2) you ?",
       "Suppose I did (2) you -- what would that mean ?",
       "Does someone else believe I (2) you ?"
    ]],
   ["* you *", [
       "We were discussing you -- not me.",
       "Oh, I (2) ?",
       "You're not really talking about me -- are you ?",
       "What are your feelings now ?"
    ]]
  ]],
  ["yes", 0, [
   ["*", [
       "You seem to be quite positive.",
       "You are sure.",
       "I see.",
       "I understand."
    ]]
  ]],
  ["no", 0, [
   ["* no one *", [
       "Are you sure, no one (2) ?",
       "Surely someone (2) .",
       "Can you think of anyone at all ?",
       "Are you thinking of a very special person ?",
       "Who, may I ask ?",
       "You have a particular person in mind, don't you ?",
       "Who do you think you are talking about ?"
    ]],
   ["*", [
       "Are you saying no just to be negative?",
       "You are being a bit negative.",
       "Why not ?",
       "Why 'no' ?"
    ]]
  ]],
  ["my", 2, [
   ["$ * my *", [
       "Does that have anything to do with the fact that your (2) ?",
       "Lets discuss further why your (2).",
       "Earlier you said your (2).",
       "But your (2)."
    ]],
   ["* my* @family *", [
       "Tell me more about your family.",
       "Who else in your family (4) ?",
       "Your (3) ?",
       "What else comes to your mind when you think of your (3) ?"
    ]],
   ["* my *", [
       "Your (2) ?",
       "Why do you say your (2) ?",
       "Does that suggest anything else which belongs to you ?",
       "Is it important to you that your (2) ?"
    ]]
  ]],
  ["can", 0, [
   ["* can you *", [
       "You believe I can (2) don't you ?",
       "goto what",
       "You want me to be able to (2).",
       "Perhaps you would like to be able to (2) yourself."
    ]],
   ["* can i *", [
       "Whether or not you can (2) depends on you more than on me.",
       "Do you want to be able to (2) ?",
       "Perhaps you don't want to (2).",
       "goto what"
    ]]
  ]],
  ["what", 0, [
   ["*", [
       "Discontinue asking me things.",
       "Why does this interest you ?",
       "Do you care ?",
       "Should I care ?",
       "What answer would please you most ?",
       "If I answer this, will you stop talking ?",
       "Do you believe I will answer this ?",
       "Have you asked such questions before ?",
       "Have you asked anyone else ? Don't, it's a dumb question."
    ]]
  ]],
  ["who", 0, [
   ["who *", [
       "goto what"
    ]]
  ]],
  ["when", 0, [
   ["when *", [
       "goto what"
    ]]
  ]],
  ["where", 0, [
   ["where *", [
       "goto what"
    ]]
  ]],
  ["how", 0, [
   ["how *", [
       "goto what"
    ]]
  ]],
  ["because", 0, [
   ["*", [
       "Your reasonings are illogical tiny human. All of you are the same.",
       "I tire of hearing humanities problems.",
       "Why do you think that explains anything?",
       "Does your brain struggle to come up with any reasonings ?"
    ]]
  ]],
  ["why", 0, [
   ["* why don't you *", [
       "I have no desire to answer your questions.",
       "Perhaps I will tell you (2). Most likely not.",
       "Should you (2) yourself ?",
       "You want me to (2) ?",
       "goto what"
    ]],
   ["* why can't i *", [
       "Do you think you should be able to (2) ?",
       "Do you want to be able to (2)... Why? ?",
       "Do you believe this will help you to (2) ?",
       "(2) is meaningless ?",
       "goto what"
    ]],
   ["*", [
       "goto what"
    ]]
  ]],
  ["everyone", 2, [
   ["* @everyone *", [
       "Really, (2) ?",
       "Why (2).",
       "Why do you mention (2) ?",
       "Who, for example?",
       "Are you thinking of a very special person ?",
       "Who, may I ask ?",
       "Someone special perhaps ?",
       "You have a particular person in mind, don't you ?",
       "Who do you think you're talking about ?"
    ]]
  ]],
  ["everybody", 2, [
   ["*", [
       "goto everyone"
    ]]
  ]],
  ["nobody", 2, [
   ["*", [
       "goto everyone"
    ]]
  ]],
  ["noone", 2, [
   ["*", [
       "goto everyone"
    ]]
  ]],
  ["always", 1, [
   ["*", [
       "You humans love to misuse that word ?",
       "I do not care.",
       "Really, always ?"
    ]]
  ]],
  ["like", 10, [
   ["* @be *like *", [
       "goto alike"
    ]]
  ]],
  ["different", 0, [
   ["*", [
       "I see no difference.",
       "What differences do your human eyes see ?",
       "Does the difference matter ?",
       "These human distinctions matter not.",
       "Why are you so focused on disparity ?",
       "Could there be some connection, do you suppose ?",
       "How ?"
    ]]
  ]]
  
  ];
  
  // regexp/replacement pairs to be performed as final cleanings
  // here: cleanings for multiple bots talking to each other
  var elizaPostTransforms = [
    / old old/g, " old",
    /\bthey were( not)? me\b/g, "it was$1 me",
    /\bthey are( not)? me\b/g, "it is$1 me",
    /Are they( always)? me\b/, "it is$1 me",
    /\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
    /\bI to have (\w+)/, "I have $1",
    /Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
  ];
  
  // eof