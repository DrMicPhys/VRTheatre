var objscriptpage=document.querySelector("#scriptpage");
var txtcolor=` orange `;
var pages = [];
var pageindex=0;
var pageindexmax=8; // pages allocated to each monologue
var docindex=0;
var docindexmax=6;//the number of monolgues
// thispage =docindex*pageindexmax+pageindex

console.log(pages);
pages[0] = `color:${txtcolor}; wrapCount:60; value: 
    computer:
     e,q keys to page up/down within a monologue
     c,z keys to switch monologue
     
    Left side control buttons (x/y) page up/down within a monologue
    Right side control buttons (A/B)switch monologue
	;`;
pages[1] = `color:${txtcolor}; wrapCount:60; value:
1 Hamlet, Act III, Scene I 
2 Macbeth Act 5, scene 5
3 “As You Like It,” Act 3, Scene 5: Phoebe is insulted
4 “A Midsummer Night’s Dream,” Act 2, Scene 1: Puck’s jest
5 “Much Ado About Nothing,” Act 4, Scene 2: Dogberry is an ass
6 Sonnet 29
;`;
pages[2] = `color:${txtcolor}; wrapCount:60; value:  	;`;
pages[3] = `color:${txtcolor}; wrapCount:60; value: 	;`;
pages[4] = `color:${txtcolor}; wrapCount:60; value: 	;`;
pages[5] = `color:${txtcolor}; wrapCount:60; value:    ;`;
pages[6] = `color:${txtcolor}; wrapCount:60; value:	;`;
pages[7] = `color:${txtcolor}; wrapCount:60; value:	;`;
//Hamlet, Act III, Scene I  
pages[8] = `color:${txtcolor}; wrapCount:60; value:  
Hamlet, Act III, Scene I 

To be, or not to be- that is the question:
Whether 'tis nobler in the mind to suffer
The slings and arrows of outrageous fortune
Or to take arms against a sea of troubles,
And by opposing end them. To die- to sleep-
No more, and by a sleep to say we end
The heartache, and the thousand natural shocks
That flesh is heir to. 'Tis a consummation
Devoutly to be wish'd. 

	;`;
pages[9] = `color:${txtcolor}; wrapCount:60; value: 
To die- to sleep.
To sleep- perchance to dream: ay, there's the rub!
For in that sleep of death what dreams may come
When we have shuffled off this mortal coil,
Must give us pause. There's the respect
That makes calamity of so long life.

;`;
pages[10] = `color:${txtcolor}; wrapCount:60; value:  	
For who would bear the whips and scorns of time,
Th' oppressor's wrong, the proud man's contumely,
The pangs of despis'd love, the law's delay,
The insolence of office, and the spurns
That patient merit of th' unworthy takes,
When he himself might his quietus make
With a bare bodkin? Who would these fardels bear,
To grunt and sweat under a weary life,
But that the dread of something after death-
;`;
pages[11] = `color:${txtcolor}; wrapCount:60; value:
The undiscover'd country, from whose bourn
No traveller returns- puzzles the will,
And makes us rather bear those ills we have
Than fly to others that we know not of?
Thus conscience does make cowards of us all,
;`;
pages[12] = `color:${txtcolor}; wrapCount:60; value: 	
And thus the native hue of resolution
Is sicklied o'er with the pale cast of thought,
And enterprises of great pith and moment
With this regard their currents turn awry
And lose the name of action.- Soft you now!
The fair Ophelia!- Nymph, in thy orisons
Be all my sins rememb'red.

(end of monologue)
;`;
pages[13] = `color:${txtcolor}; wrapCount:60; value:   ;`;
pages[14] = `color:${txtcolor};value:	;`;
pages[15] = `color:${txtcolor};value:	;`;
//Macbeth Act 5, scene 5
pages[16] = `color:${txtcolor}; wrapCount:70; value:  
Macbeth Act 5, scene 5

She should have died hereafter.
There would have been a time for such a word.
To-morrow, and to-morrow, and to-morrow,
Creeps in this petty pace from day to day
To the last syllable of recorded time,
And all our yesterdays have lighted fools
The way to dusty death. 

	;`;
pages[17] = `color:${txtcolor}; wrapCount:60; value: 
Out, out, brief candle!
Life’s but a walking shadow, a poor player
That struts and frets his hour upon the stage
And then is heard no more: it is a tale
Told by an idiot, full of sound and fury,
Signifying nothing.

(end of monologue)
;`;
pages[18] = `color:${txtcolor}; wrapCount:60; value:  	
 ;`;
pages[19] = `color:${txtcolor}; wrapCount:60; value:
 ;`;
pages[20] = `color:${txtcolor}; wrapCount:60; value: 	
 ;`;
pages[21] = `color:${txtcolor}; wrapCount:60; value:   
 
;`;
pages[22] = `color:${txtcolor};value:	;`;
pages[23] = `color:${txtcolor};value:	;`;
//“As You Like It,” Act 3, Scene 5: Phoebe is insulted 
pages[24] = `color:${txtcolor}; wrapCount:65; value:  
As You Like It, Act 3, Scene 5: Phoebe is insulted

Think not I love him, though I ask for him,
’Tis but a peevish boy, yet he talks well.
But what care I for words? Yet words do well
When he that speaks them pleases those that hear.
It is a pretty youth, not very pretty,
But sure he’s proud, and yet his pride becomes him.
He’ll make a proper man. The best thing in him
Is his complexion, and faster than his tongue
Did make offense, his eye did heal it up.
;`;
pages[25] = `color:${txtcolor}; wrapCount:60; value: 
He is not very tall, yet for his year’s he’s tall.
His leg is but so so, and yet ’tis well.
There was a pretty redness in his lip,
A little riper and more lusty red
Than that mixed in his cheek, ’twas just the difference
Betwixt the constant red and mingled damask.
;`;
pages[26] = `color:${txtcolor}; wrapCount:60; value:  	
There be some women, Silvius, had they marked him
In parcels as I did, would have gone near
To fall in love with him, but, for my part,
I love him not nor hate him not, and yet
I have more cause to hate him than to love him,
For what had he to do to chide at me?

 ;`;
pages[27] = `color:${txtcolor}; wrapCount:60; value:
He said mine eyes were black and my hair black;
And, now I am rememb’red, scorned at me.
I marvel why I answered not again.
But that’s all one; omittance is no quittance.
I’ll write to him a very taunting letter,
And thou shalt bear it. Wilt thou, Silvius?

(end of monologue)
 ;`;
pages[28] = `color:${txtcolor}; wrapCount:60; value: 	
 ;`;
pages[29] = `color:${txtcolor}; wrapCount:60; value:   
 
;`;
pages[30] = `color:${txtcolor};value:	;`;
pages[31] = `color:${txtcolor};value:	;`;
//A Midsummer Night’s Dream, Act 2, Scene 1: Puck’s jest 
pages[32] = `color:${txtcolor}; wrapCount:60; value:  
A Midsummer Night’s Dream, Act 2, Scene 1: Puck’s jest 

Thou speak’st aright,
I am that merry wanderer of the night.
I jest to Oberon and make him smile
When I a fat and bean-fed horse beguile,
Neighing in likeness of a filly foal:
And sometime lurk I in a gossip’s bowl,
In very likeness of a roasted crab,
And when she drinks, against her lips I bob
And on her wither’d dewlap pour the ale.

;`;
pages[33] = `color:${txtcolor}; wrapCount:60; value: 
The wisest aunt, telling the saddest tale,
Sometime for three-foot stool mistaketh me,
Then slip I from her bum, down topples she,
And ‘tailor’ cries, and falls into a cough,
And then the whole quire hold their hips and laugh,
And waxen in their mirth and neeze and swear
A merrier hour was never wasted there.
But, room, fairy! here comes Oberon. 

(end of monologue) 
;`;
pages[34] = `color:${txtcolor}; wrapCount:60; value:  	

 ;`;
pages[35] = `color:${txtcolor}; wrapCount:60; value:
 ;`;
pages[36] = `color:${txtcolor}; wrapCount:60; value: 	
 ;`;
pages[37] = `color:${txtcolor}; wrapCount:60; value:   
;`;
pages[38] = `color:${txtcolor};value:	;`;
pages[39] = `color:${txtcolor};value:	;`;
//Much Ado About Nothing, Act 4, Scene 2: Dogberry is an ass

 
pages[40] = `color:${txtcolor}; wrapCount:60; value:  
Much Ado About Nothing, Act 4, Scene 2: Dogberry is an ass

Dost thou not suspect my place? dost thou not
suspect my years? O that he were here to write me
down an ass! But, masters, remember that I am an
ass, though it be not written down, yet forget not
that I am an ass. No, thou villain, thou art full of
piety, as shall be proved upon thee by good witness.
;`;
pages[41] = `color:${txtcolor}; wrapCount:60; value: 
I am a wise fellow, and, which is more, an officer,
and, which is more, a householder, and, which is
more, as pretty a piece of flesh as any is in
Messina, and one that knows the law, go to, and a
rich fellow enough, go to, and a fellow that hath
had losses, and one that hath two gowns and every
thing handsome about him. Bring him away. O that
I had been writ down an ass!!

(end of monologue)  
;`;
pages[42] = `color:${txtcolor}; wrapCount:70; value:  	

 ;`;
pages[43] = `color:${txtcolor}; wrapCount:60; value:
 ;`;
pages[44] = `color:${txtcolor}; wrapCount:60; value: 	
 ;`;
pages[45] = `color:${txtcolor}; wrapCount:60; value:   
;`;
pages[46] = `color:${txtcolor};value:	;`;
pages[47] = `color:${txtcolor};value:	;`;
//Sonnet 29
pages[48] = `color:${txtcolor}; wrapCount:60; value:  
Sonnet 29

When, in disgrace with fortune and men’s eyes,
I all alone beweep my outcast state,
And trouble deaf heaven with my bootless cries,
And look upon myself and curse my fate,
Wishing me like to one more rich in hope,
Featured like him, like him with friends possessed,
Desiring this man’s art and that man’s scope,
With what I most enjoy contented least,
;`;
pages[49] = `color:${txtcolor}; wrapCount:60; value: 
Yet in these thoughts myself almost despising,
Haply I think on thee, and then my state,
(Like to the lark at break of day arising
From sullen earth) sings hymns at heaven’s gate,
       For thy sweet love remembered such wealth brings
       That then I scorn to change my state with kings.

(end of monologue)  
;`;
pages[50] = `color:${txtcolor}; wrapCount:70; value:  	

 ;`;
pages[51] = `color:${txtcolor}; wrapCount:60; value:
 ;`;
pages[52] = `color:${txtcolor}; wrapCount:60; value: 	
 ;`;
pages[53] = `color:${txtcolor}; wrapCount:60; value:   
;`;
pages[54] = `color:${txtcolor};value:	;`;
pages[55] = `color:${txtcolor};value:	;`;


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
/**/
