var objscriptpage=document.querySelector("#scriptpage");
var txtcolor=` orange `;
var pages = [];
var pageindex=0;
var pageindexmax=4; // pages allocated to each monologue
var docindex=0;
var docindexmax=9;//the number of monolgues
// thispage =docindex*pageindexmax+pageindex

console.log(pages);
pages[0] = `color:${txtcolor}; wrapCount:60; value: 
    Metaquest: 
      Left side control buttons (x/y) page up/down within a monologue
      Right side control buttons (A/B)switch monologue
      
    computer:
     e,q keys to page up/down within a monologue
     c,z keys to switch monologue

	;`;
pages[1] = `color:${txtcolor}; wrapCount:60; value:
1 AN IDEAL HUSBAND by Oscar Wilde (MABEL CHILTERN)
2 HEDDA GABLER by Henrik Ibsen (MISS TESMAN)
3 HEDDA GABLER by Henrik Ibsen (LOVBORG)
4 HEDDA GABLER by Henrik Ibsen(HEDDA)
5 THE SEA-GULL by Anton Checkhov (NINA)
6 A MIDSUMMER NIGHT'S DREAM by Shakespeare (Hermia)
7 MISS JULIE by August Strindberg (MISS JULIE)
8 PYGMALION by George Bernard Shaw (HENRY HIGGINS)
9 IMAGINARY INVALID by Moliere (MR DIA)
;`;
pages[2] = `color:${txtcolor}; wrapCount:60; value:  	;`;
pages[3] = `color:${txtcolor}; wrapCount:60; value: 	;`;
//AN IDEAL HUSBAND by Oscar Wilde (MABEL CHILTERN)  
pages[4] = `color:${txtcolor}; wrapCount:60; value:  
AN IDEAL HUSBAND by Oscar Wilde

MABEL CHILTERN: 
Well, Tommy has proposed to me again. Tommy really does nothing but propose to me. He proposed to me last night in the music-room, when I was quite unprotected, as there was an elaborate trio going on. I didn't dare to make the smallest repartee, I need hardly tell you. If I had, it would have stopped the music at once. Musical people are so absurdly unreasonable. They always want one to be perfectly dumb at the very moment when one is longing to be absolutely deaf. Then he proposed to me in broad daylight this morning, in front of that dreadful statue of Achilles. 

	;`;
pages[5] = `color:${txtcolor}; wrapCount:60; value: 
Really, the things that go on in front of that work of art are quite appalling. The police should interfere. At luncheon I saw by the glare in his eye that he was going to propose again, and I just managed to check him in time by assuring him that I was a bimetallist. Fortunately I don't know what bimetallism means. And I don't believe anybody else does either. But the observation crushed Tommy for ten minutes. He looked quite shocked. And then Tommy is so annoying in the way he proposes. If he proposed at the top of his voice, I should not mind so much. That might produce some effect on the public. But he does it in a horrid confidential way. 


;`;
pages[6] = `color:${txtcolor}; wrapCount:60; value:  	
When Tommy wants to be romantic he talks to one just like a doctor. I am very fond of Tommy, but his methods of proposing are quite out of date. I wish, Gertrude, you would speak to him, and tell him that once a week is quite often enough to propose to any one, and that it should always be done in a manner that attracts some attention.

(monologue ends)
;`;
pages[7] = `color:${txtcolor}; wrapCount:60; value:


;`;
//HEDDA GABLER by Henrik Ibsen
pages[8] = `color:${txtcolor}; wrapCount:70; value:  
HEDDA GABLER by Henrik Ibsen

MISS TESMAN:
[Rises and lays her hand on his shoulders.] Have I any other
happiness in this world except to smooth your way for you,
my dear boy. You, who have had neither father nor mother
to depend on. And now we have reached the goal, George!
Things have looked black enough for us, sometimes., but,
thank heaven, now you have nothing to fear

(monologue ends) 

	;`;
pages[9] = `color:${txtcolor}; wrapCount:60; value:  	
 ;`;
pages[10] = `color:${txtcolor}; wrapCount:60; value:
 ;`;
pages[11] = `color:${txtcolor}; wrapCount:60; value: 	
 ;`;

//HEDDA GABLER by Henrik Ibsen (LOVBORG)
pages[12] = `color:${txtcolor}; wrapCount:65; value:  
HEDDA GABLER by Henrik Ibsen

LOVBORG:
 Yes, I tell you! Tore it into a thousand pieces—and scattered them on the fiord—far out. There there is cool seawater at any rate—let them drift upon it—drift with the
current and the wind. And then presently they will sink—
deeper and deeper—as I shall, Thea.

(monologue ends)
;`;
pages[13] = `color:${txtcolor}; wrapCount:60; value: 	
 ;`;
pages[14] = `color:${txtcolor}; wrapCount:60; value:   
 
;`;
pages[15] = `color:${txtcolor};value:	;`;

//HEDDA GABLER by Henrik Ibsen (HEDDA)
pages[16] = `color:${txtcolor}; wrapCount:60; value:  
HEDDA GABLER by Henrik Ibsen

HEDDA:
I don’t answer such questions. I only know that Eilert
Lovborg has had the courage to live his life after his own
fashion. And then—the last great act, with its beauty! Ah!
that he should have the will and the strength to turn away
from the banquet of life—so early

(monologue ends)

;`;

pages[17] = `color:${txtcolor}; wrapCount:60; value:  	

 ;`;
pages[18] = `color:${txtcolor}; wrapCount:60; value:
 ;`;
pages[19] = `color:${txtcolor}; wrapCount:60; value: 	
 ;`;

//THE SEA-GULL by Anton Checkhov

 
pages[20] = `color:${txtcolor}; wrapCount:60; value:  
THE SEA-GULL by Anton Checkhov

NINA: 
Why do you say that you have kissed the ground I walked on? You should kill me rather. I am so tired. If I could only rest—rest. I am a sea-gull—no—no, I am an actress. He is there too. Ah, well—no matter. He does not believe in the theatre., he used to laugh at my dreams, so that little by little I became down-hearted and ceased to believe in it too. Then came all the cares of love, the continual anxiety about my little one, so that I soon grew trivial and spiritless, and played my parts without meaning. 
;`;
pages[21] = `color:${txtcolor}; wrapCount:60; value: 
I never knew what to do with my hands, and I could not walk properly or control my voice. You cannot imagine the state of mind of one who knows as he goes through a play how terribly badly he is acting. I am a sea-gull—no—no, that is not what I meant to say. Do you remember how you shot a seagull once? A man chanced to pass that way and destroyed it out of idleness. That is an idea for a short story, but it is not what I meant to say.
 (She passes her hand across her forehead))  
;`;
pages[22] = `color:${txtcolor}; wrapCount:60; value:
  What was I saying? Oh, yes, the stage. I have changed now. Now I am a real actress. I act with joy, with exaltation, I am intoxicated by it, and feel that I am superb. I have been walking and walking, and thinking and thinking, ever since I have been here, and I feel the strength of my spirit growing in me every day. I know now, I understand at last, Constantine, that for us, whether we write or act, it is not the honour and glory of which I have dreamt that is important, it is the strength to endure. One must know how to bear one's cross, and one must have faith. I believe, and so do not suffer so much, and when I think of my calling I do not fear life.
(monologue ends)
 ;`;
pages[23] = `color:${txtcolor}; wrapCount:60; value: 	
 ;`;
//A MIDSUMMER NIGHT'S DREAM by Shakespeare
pages[24] = `color:${txtcolor}; wrapCount:60; value:  
A MIDSUMMER NIGHT'S DREAM by Shakespeare

HERMIA:
 Now I but chide., but I should use thee worse,
If thou hast slain Lysander in his sleep,
Being o'er shoes in blood, plunge in the deep,
And kill me too.

;`;
pages[25] = `color:${txtcolor}; wrapCount:60; value: 
The sun was not so true unto the day
As he to me: would he have stolen away
From sleeping Hermia? I'll believe as soon
This whole earth may be bored and that the moon
May through the centre creep and so displease
Her brother's noontide with Antipodes.
It cannot be but thou hast murder'd him.,

;`;
pages[26] = `color:${txtcolor}; wrapCount:60; value:  	
So should a murderer look, so dead, so grim.
(after exchange with Demetrius)
Hermia: Out, dog! out, cur! thou drivest me past the bounds
Of maiden's patience. Hast thou slain him, then?
Henceforth be never number'd among men!
O, once tell true, tell true, even for my sake!
 ;`;
pages[27] = `color:${txtcolor}; wrapCount:60; value:
Durst thou have look'd upon him being awake,
And hast thou kill'd him sleeping? O brave touch!
Could not a worm, an adder, do so much?
An adder did it., for with doubler tongue
Than thine, thou serpent, never adder stung. 

(monologue ends)
;`;

//MISS JULIE by August Strindberg
pages[28] = `color:${txtcolor}; wrapCount:60; value:  
MISS JULIE by August Strindberg

MISS JULIE: 
Don't you think I can stand the sight of blood? You think I am weak. Oh, I should like to see your blood flowing—to see your brain on the chopping block, all your sex swimming in a sea of blood. I believe I could drink out of your skull, bathe my feet in your breast and eat your heart cooked whole. You think I am weak., you believe that I love you because my life has mingled with yours., you think that I would carry your offspring under my heart, and nourish it with my blood—give birth to your child and take your name! 

;`;
pages[29] = `color:${txtcolor}; wrapCount:60; value: 
Hear, you, what are you called, what is your family name? But I'm sure you have none. I should be "Mrs. Gate-Keeper," perhaps, or "Madame Dumpheap." You dog with my collar on, you lackey with my father's hallmark on your buttons. I play rival to my cook—oh—oh—oh! You believe that I am cowardly and want to run away. No, now I shall stay. The thunder may roll.
;`;
pages[30] = `color:${txtcolor}; wrapCount:60; value:  	
My father will return—and find his desk broken into—his money gone! Then he will ring—that bell. A scuffle with his servant—then sends for the police—and then I tell all—everything! Oh, it will be beautiful to have it all over with—if only that were the end! And my father—he'll have a shock and die, and then that will be the end. Then they will place his swords across the coffin—and the Count's line is extinct. The serf's line will continue in an orphanage, win honors in the gutter and end in prison.
(monologue ends)
 ;`;
pages[31] = `color:${txtcolor}; wrapCount:60; value:

 ;`;

//PYGMALION by George Bernard Shaw
pages[32] = `color:${txtcolor}; wrapCount:60; value:  
PYGMALION by George Bernard Shaw

Henry Higgins: 
There! That’s all you’ll get out of Eliza. Ah-ah-oo! No use explaining. As a military man you ought to know that. Giver her her orders: that’s what she wants. Eliza: you are to live here for the next six months, learning how to speak beautifully, like a lady in a florists shop. If you’re good and do whatever your told, you shall sleep in a proper bedroom, and lots to eat, and money to buy chocolates take rides in taxis. If you’re naughty and idle you will sleep in the back kitchen among the black beetles, and be walloped by Mrs Pearce wit a broomstick. 
;`;
pages[33] = `color:${txtcolor}; wrapCount:60; value: 
At the end of six months you shall go to Buckingham Palace in a carriage, beautifully dressed. If the King find out you’re not a lady, you will be taken by the police to the Tower of London, where your head will be cut off as a warning to other presumptuous flower girls. If you are not found out,  you shall have a present of seven-and-sixpence to start life with as a lady in a shop. If you refuse this offer you will be a most ungrateful and wicked girl., and the angles will weep for you.  Now are you satisfied, Pickering?
(monologue ends)
;`;
pages[34] = `color:${txtcolor}; wrapCount:60; value:  	

 ;`;
pages[35] = `color:${txtcolor}; wrapCount:60; value:

 ;`;

//IMAGINARY INVALID by Moliere
pages[36] = `color:${txtcolor}; wrapCount:60; value:  
IMAGINARY INVALID by Moliere

Mr. Dia: 
Sir, it is not because I am his father, but I can boast that I have reason to be satisfied with him, and that all those who see him speak of him as of a youth without guile. He has not a very lively imagination, nor that sparkling wit which is found in some others., but it is this which has always made me augur well of his judgment, a quality required for the exercise of our art. As a child he never was what is called sharp or lively. He was always gentle, peaceful, taciturn, never saying a word, and never playing at any of those little pastimes that we call children’s games. 
It was found most difficult to teach him to read, and he was nine years old before he knew his letters. 
;`;
pages[37] = `color:${txtcolor}; wrapCount:60; value: 
A good omen, I used to say to myself., trees slow of growth bear the best fruit. We engrave on marble with much more difficulty than on sand, but the result is more lasting., and that dullness of apprehension, that heaviness of imagination, is a mark of a sound judgment in the future. When I sent him to college, he found it hard work, but he stuck to his duty, and bore up with obstinacy against all difficulties. His tutors always praised him for his assiduity and the trouble he took. In short, by dint of continual hammering, he at last succeeded gloriously in obtaining his degree., and I can say, without vanity, that from that time till now there has been no candidate who has made more noise than he in all the disputations of our school. 

;`;
pages[38] = `color:${txtcolor}; wrapCount:60; value:  	
There he has rendered himself formidable, and no debate passes but he goes and argues loudly and to the last extreme on the opposite side. He is firm in dispute, strong as a Turk in his principles, never changes his opinion, and pursues an argument to the last recesses of logic. But, above all things, what pleases me in him, and what I am glad to see him follow my example in, is that he is blindly attached to the opinions of the ancients, and that he would never understand nor listen to the reasons and the experiences of the pretended discoveries of our century concerning the circulation of the blood and other opinions of the same stamp.

(monologue ends)
 ;`;
pages[39] = `color:${txtcolor}; wrapCount:60; value:

 ;`;


this.objscriptpage.setAttribute('text', pages[pageindex]);
document.addEventListener('keydown', function(e){
    if(e.key=="e"){
 	    pageindex=Math.min(pageindex+1,pageindexmax-1);   			        
    }
    if(e.key=="q"){
 	    pageindex=Math.max(pageindex-1,0);   			        
    }
   if(e.key=="c"){
 	    docindex=Math.min(docindex+1,docindexmax);
 	    pageindex=0;
    }
    if(e.key=="z"){
 	    docindex=Math.max(docindex-1,0);
 	    pageindex=0;
    }
    thispage =docindex*pageindexmax+pageindex;
    objscriptpage.setAttribute('scale', "1 1 1");
    objscriptpage.setAttribute('text', pages[thispage]);
});

document.addEventListener('xbuttondown', function(){
    pageindex=Math.min(pageindex+1,pageindexmax-1);
    thispage =docindex*pageindexmax+pageindex;
    objscriptpage.setAttribute('text', pages[thispage]);   
});
document.addEventListener('ybuttondown', function(){
    pageindex=Math.max(pageindex-1,0);
    thispage =docindex*pageindexmax+pageindex;
    objscriptpage.setAttribute('text', pages[thispage]);
});

document.addEventListener('abuttondown', function(){
 	    docindex=Math.min(docindex+1,docindexmax);
 	    pageindex=0;
        thispage =docindex*pageindexmax+pageindex;
        objscriptpage.setAttribute('text', pages[thispage]);
});
document.addEventListener('bbuttondown', function(){
     docindex=Math.max(docindex-1,0);
     pageindex=0;
     thispage =docindex*pageindexmax+pageindex;
    objscriptpage.setAttribute('text', pages[thispage]);
});
/**/
