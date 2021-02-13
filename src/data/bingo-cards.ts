import { BingoCardModel } from '../models/BingoCard';

const cards: {[key: string]: BingoCardModel} = {
    "reddit-fantasy-2020": {
        "name": "r/Fantasy 2020 Book Bingo Challenge",
        "url": "https://www.reddit.com/r/Fantasy/comments/ft254j/official_rfantasy_2020_book_bingo_challenge/",
        "squares": [
            [
                {
                    "title": "Novel Translated from its Original Language",
                    "description": "The spirit of this square would be to read a book that's originally not written in English. But you can also read books in another language you speak. Doesn't matter what language you read the book in, as long as it's not the original language it was first published in."
                },
                {
                    "title": "Setting Featuring Snow, Ice, or Cold",
                    "description": "This setting must used be for a good portion of the book."
                },
                {
                    "title": "Optimistic SFF",
                    "description": "The sun is shining, the birds are singing, and while we've come across some trouble, we're going to overcome it *together*. Sometimes very bad things happen (like an entire apocalypse) but ultimately you're left feeling things will get better, with a sense of hope. Includes genres like hopepunk and noblebright."
                },
                {
                    "title": "Novel Featuring Necromancy",
                    "description": "Raising the dead, woot! Self-explanatory."
                },
                {
                    "title": "Ace / Aro Spec Fic",
                    "description": "A novel featuring Asexual and/or Aromantic character(s). It should be explicitly stated (either by the character themselves, another character, or the author) that a character isn't interested in romance or sex."
                }
            ],
            [
                {
                    "title": "Novel Featuring a Ghost",
                    "description": "This one is pretty self-explanatory."
                },
                {
                    "title": "Novel Featuring Exploration",
                    "description": "Boldly go.... Again, pretty self-explanatory."
                },
                {
                    "title": "Climate Fiction",
                    "description": "Climate should play a significant role in the story. This includes the genres of solarpunk, post-apocalyptic, ecopunk, clifi."
                },
                {
                    "title": "Novel with a Colour in the Title",
                    "description": "Self-explanatory."
                },
                {
                    "title": "Any r/fantasy Book Club Book of the Month OR r/fantasy Read-along Book",
                    "description": "Any past or still active book clubs count, as well as past or current read-alongs. NOTE: All of the current book club info can also be found on <a href='https://www.goodreads.com/group/show/107259-r-fantasy-discussion-group'>our goodreads page</a>."
                }
            ],
            [
                {
                    "title": "Self-Published SFF Novel",
                    "description": "Only self-published novels will count for this square. If the novel has been picked up by a publisher as long as you read it when it was self-pubbed it will still count."
                },
                {
                    "title": "Novel with Chapter Epigraphs",
                    "description": "A quote used to introduce a chapter, it often serves as a summary or counterpoint to the passage that follows, although it may simply set the stage for it. "
                },
                {
                    "title": "Novel Published in 2020",
                    "description": "Self-explanatory."
                },
                {
                    "title": "Novel Set in a School or University",
                    "description": "Self-explanatory."
                },
                {
                    "title": "Book About Books",
                    "description": "Books must be central to the plot somehow."
                }
            ],
            [
                {
                    "title": "A Book that Made You Laugh",
                    "description": "Doesn't have to be a comedy, but should make you laugh at least once while reading."
                },
                {
                    "title": "Five SFF Short Stories",
                    "description": "Self-explanatory."
                },
                {
                    "title": "Big Dumb Object",
                    "description": "A novel featuring any mysterious object of unknown origin and immense power which generates an intense sense of wonder or horror by its mere existence and which people must seek to understand before it's too late. In this case, we are counting mythical forests, objects under the sea or in space, mysterious signals or illnesses, and science that is too futuristic for our protagonists to understand. NOT a monster.  Examples: Mythago Wood (Holdstock), Sphere (Crichton), Under the Dome (King), Mass Effect, Wanderers (Wendig), Noumenon (Lostetter), The Expanse (Corey), The Interdependency (Scalzi), The Chronicles of the One (Roberts), Themis Files (Neuvel), World War Z (Brooks), Uprooted (Novik). "
                },
                {
                    "title": "Feminist Novel",
                    "description": "Includes feminist themes such as but not limited to gender inequality, sexuality, race, economics, and reproduction. It's not enough to have strong female characters or a setting where women are equal to men, feminist themes must be central to and directly addressed in a critical manner by the plot."
                },
                {
                    "title": "Novel by a Canadian Author",
                    "description": "Canada has a fantastic SFF scene, let's explore some of the authors there using this square."
                }
            ],
            [
                {
                    "title": "Novel with a Number in the Title",
                    "description": "Self-explanatory."
                },
                {
                    "title": "Romantic Fantasy / Paranormal Romance",
                    "description": "Romance needs to be central to the plot and the story would not make sense if it was removed. Should also either have a happily ever after or a happy for now ending."
                },
                {
                    "title": "Novel with a Magical Pet",
                    "description": "Self-explanatory."
                },
                {
                    "title": "Format: Graphic Novel (at least 1 vol.) OR Audiobook / Audio drama",
                    "description": "This is a format, not a genre however, please stick to something within speculative fiction. If you are reading individual comics for this square please read a volume’s worth. You can also use a manga volume for this square (again, please keep it to speculative fiction genres). You may also choose to listen to an audiobook OR an audio drama for this square - any speculative fiction audiobook / audio drama will count (novel length)."
                },
                {
                    "title": "Novel Featuring Politics",
                    "description": "Politics are central to the plot. This covers everything from royalty, elections, wars, and even smaller local politics."
                }
            ]
        ]
    },
    "reddit-fantasy-2020-hard": {
        "name": "r/Fantasy 2020 Book Bingo Challenge - Hard mode",
        "url": "https://www.reddit.com/r/Fantasy/comments/ft254j/official_rfantasy_2020_book_bingo_challenge/",
        "squares": [
            [
                {
                    "title": "Novel Translated from its Original Language",
                    "description": "The spirit of this square would be to read a book that's originally not written in English. But you can also read books in another language you speak. Doesn't matter what language you read the book in, as long as it's not the original language it was first published in. <br> <strong>HARD MODE:</strong> Written by a woman. Coauthor does not count."
                },
                {
                    "title": "Setting Featuring Snow, Ice, or Cold",
                    "description": "This setting must used be for a good portion of the book. <br> <strong>HARD MODE:</strong> The entire book takes place in this setting."
                },
                {
                    "title": "Optimistic SFF",
                    "description": "The sun is shining, the birds are singing, and while we've come across some trouble, we're going to overcome it *together*. Sometimes very bad things happen (like an entire apocalypse) but ultimately you're left feeling things will get better, with a sense of hope. Includes genres like hopepunk and noblebright. <br> <strong>HARD MODE:</strong> Not Becky Chambers"
                },
                {
                    "title": "Novel Featuring Necromancy",
                    "description": "Raising the dead, woot! Self-explanatory. <br> <strong>HARD MODE:</strong> Necromancer is the protagonist."
                },
                {
                    "title": "Ace / Aro Spec Fic",
                    "description": "A novel featuring Asexual and/or Aromantic character(s). It should be explicitly stated (either by the character themselves, another character, or the author) that a character isn't interested in romance or sex. <br> <strong>HARD MODE:</strong> Ace / Aro protagonist."
                }
            ],
            [
                {
                    "title": "Novel Featuring a Ghost",
                    "description": "This one is pretty self-explanatory. <br> <strong>HARD MODE:</strong> At least one main protagonist is a ghost."
                },
                {
                    "title": "Novel Featuring Exploration",
                    "description": "Boldly go.... Again, pretty self-explanatory. <br> <strong>HARD MODE:</strong> The exploration is the central plot."
                },
                {
                    "title": "Climate Fiction",
                    "description": "Climate should play a significant role in the story. This includes the genres of solarpunk, post-apocalyptic, ecopunk, clifi. <br> <strong>HARD MODE:</strong> Not post-apocalyptic"
                },
                {
                    "title": "Novel with a Colour in the Title",
                    "description": "Self-explanatory. <br> <strong>HARD MODE:</strong> Not black, red, grey, or white."
                },
                {
                    "title": "Any r/fantasy Book Club Book of the Month OR r/fantasy Read-along Book",
                    "description": "Any past or still active book clubs count, as well as past or current read-alongs. NOTE: All of the current book club info can also be found on <a href='https://www.goodreads.com/group/show/107259-r-fantasy-discussion-group'>our goodreads page</a>. <br> <strong>HARD MODE:</strong> Must read a current selection of either a book club or read-along and participate in the discussion."
                }
            ],
            [
                {
                    "title": "Self-Published SFF Novel",
                    "description": "Only self-published novels will count for this square. If the novel has been picked up by a publisher as long as you read it when it was self-pubbed it will still count. <br> <strong>HARD MODE:</strong> Self-pubbed and has fewer than 50 ratings on goodreads."
                },
                {
                    "title": "Novel with Chapter Epigraphs",
                    "description": "A quote used to introduce a chapter, it often serves as a summary or counterpoint to the passage that follows, although it may simply set the stage for it.  <br> <strong>HARD MODE:</strong> Original to the novel (i.e., not a quotation from another source)."
                },
                {
                    "title": "Novel Published in 2020",
                    "description": "Self-explanatory. <br> <strong>HARD MODE:</strong> It's also a Debut Novel."
                },
                {
                    "title": "Novel Set in a School or University",
                    "description": "Self-explanatory. <br> <strong>HARD MODE:</strong> Not Harry Potter or the Magicians."
                },
                {
                    "title": "Book About Books",
                    "description": "Books must be central to the plot somehow. <br> <strong>HARD MODE:</strong> Does not feature a library (public, school, or private)."
                }
            ],
            [
                {
                    "title": "A Book that Made You Laugh",
                    "description": "Doesn't have to be a comedy, but should make you laugh at least once while reading. <br> <strong>HARD MODE:</strong> Not Pratchett."
                },
                {
                    "title": "Five SFF Short Stories",
                    "description": "Self-explanatory. <br> <strong>HARD MODE:</strong> Read an entire SFF anthology or collection."
                },
                {
                    "title": "Big Dumb Object",
                    "description": "A novel featuring any mysterious object of unknown origin and immense power which generates an intense sense of wonder or horror by its mere existence and which people must seek to understand before it's too late. In this case, we are counting mythical forests, objects under the sea or in space, mysterious signals or illnesses, and science that is too futuristic for our protagonists to understand. NOT a monster.  Examples: Mythago Wood (Holdstock), Sphere (Crichton), Under the Dome (King), Mass Effect, Wanderers (Wendig), Noumenon (Lostetter), The Expanse (Corey), The Interdependency (Scalzi), The Chronicles of the One (Roberts), Themis Files (Neuvel), World War Z (Brooks), Uprooted (Novik).  <br> <strong>HARD MODE:</strong> The classic golden-age of science fiction definition of Big Dumb Object - Dyson Spheres, alien spaceships, a BIG thing that appears with no explanation. <a href='https://www.goodreads.com/list/show/37505.Big_Dumb_Objects'>https://www.goodreads.com/list/show/37505.Big_Dumb_Objects</a>"
                },
                {
                    "title": "Feminist Novel",
                    "description": "Includes feminist themes such as but not limited to gender inequality, sexuality, race, economics, and reproduction. It's not enough to have strong female characters or a setting where women are equal to men, feminist themes must be central to and directly addressed in a critical manner by the plot. <br> <strong>HARD MODE:</strong>  (Updated 4/4) Feminist novel by a person of colour or Indigeous author."
                },
                {
                    "title": "Novel by a Canadian Author",
                    "description": "Canada has a fantastic SFF scene, let's explore some of the authors there using this square. <br> <strong>HARD MODE:</strong> Book from an Canadian small press OR self-published Canadian author."
                }
            ],
            [
                {
                    "title": "Novel with a Number in the Title",
                    "description": "Self-explanatory. <br> <strong>HARD MODE:</strong> Also features a colour in the title.,"
                },
                {
                    "title": "Romantic Fantasy / Paranormal Romance",
                    "description": "Romance needs to be central to the plot and the story would not make sense if it was removed. Should also either have a happily ever after or a happy for now ending. <br> <strong>HARD MODE:</strong> Read and participate in HEA Book Club pick."
                },
                {
                    "title": "Novel with a Magical Pet",
                    "description": "Self-explanatory. <br> <strong>HARD MODE:</strong> Magical pet can also speak."
                },
                {
                    "title": "Format: Graphic Novel (at least 1 vol.) OR Audiobook / Audio drama",
                    "description": "This is a format, not a genre however, please stick to something within speculative fiction. If you are reading individual comics for this square please read a volume’s worth. You can also use a manga volume for this square (again, please keep it to speculative fiction genres). You may also choose to listen to an audiobook OR an audio drama for this square - any speculative fiction audiobook / audio drama will count (novel length). <br> <strong>HARD MODE:</strong> Graphic Novel - stand alone graphic novel. Audiobook / audio drama - has to be over 25 hours long."
                },
                {
                    "title": "Novel Featuring Politics",
                    "description": "Politics are central to the plot. This covers everything from royalty, elections, wars, and even smaller local politics. <br> <strong>HARD MODE:</strong> Not featuring royalty."
                }
            ]
        ]
    }
}

export default cards;