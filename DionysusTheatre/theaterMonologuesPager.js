var objscriptpage=document.querySelector("#scriptpage");
var txtcolor=` orange `;
var pages = [];
var pageindex=0;
var pageindexmax=8; // pages allocated to each monologue
var docindex=0;
var docindexmax=5; //the number of monolgues (not including intro pages)
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
1 Creon's monologue from Oedipus Rex by Sophocles
2 Jocasta's monologue from Oedipus Rex by Sophocles
3 Oedipus's monologue from Oedipus Rex by Sophocles
4 Lysistrata's monologue from Lysistrata by Aristophanes
5 Magistrate 's monologue from Lysistrata by Aristophanes
;`;
pages[2] = `color:${txtcolor}; wrapCount:60; value:  	;`;
pages[3] = `color:${txtcolor}; wrapCount:60; value: 	;`;
pages[4] = `color:${txtcolor}; wrapCount:60; value: 	;`;
pages[5] = `color:${txtcolor}; wrapCount:60; value:    ;`;
pages[6] = `color:${txtcolor}; wrapCount:60; value:	;`;
pages[7] = `color:${txtcolor}; wrapCount:60; value:	;`;
//Creon's monologue from Oedipus Rex by Sophocles 
pages[8] = `color:${txtcolor}; wrapCount:60; value:  
Creon's monologue from Oedipus Rex by Sophocles

Creon, Oedipus’s brother-in-law and trusted advisor.

Oedipus accuses him of plotting to overthrow 
him and seize the throne. 
Creon vehemently denies this accusation and 
does so in a logical and measured way.
	;`;
pages[9] = `color:${txtcolor}; wrapCount:60; value: 
Not so, if thou wouldst reason with thyself,
As I with myself. First, I bid thee think,
Would any mortal choose a troubled reign
Of terrors rather than secure repose,
If the same power were given him? As for me,
I have no natural craving for the name
Of king, preferring to do kingly deeds,
And so thinks every sober-minded man.
;`;
pages[10] = `color:${txtcolor}; wrapCount:60; value:  	
Now all my needs are satisfied through thee,
And I have naught to fear, but were I king,
My acts would oft run counter to my will.
How could a title then have charms for me
Above the sweets of boundless influence?
I am not so infatuate as to grasp
The shadow when I hold the substance fast.
;`;
pages[11] = `color:${txtcolor}; wrapCount:60; value:
Now all men cry me Godspeed! wish me well,
And every suitor seeks to gain my ear,
If he would hope to win a grace from thee.
Why should I leave the better, choose the worse?
That were sheer madness, and I am not mad.
No such ambition ever tempted me,
Nor would I have a share in such intrigue.
;`;
pages[12] = `color:${txtcolor}; wrapCount:60; value: 	
And if thou doubt me, first to Delphi go,
There ascertain if my report was true
Of the god's answer, next investigate
If with the seer I plotted or conspired,
And if it prove so, sentence me to death,
Not by thy voice alone, but mine and thine.
But O condemn me not, without appeal,
On bare suspicion. 'Tis not right to adjudge
Bad men at random good, or good men bad.
;`;
pages[13] = `color:${txtcolor}; wrapCount:60; value:   
I would as lief a man should cast away
The thing he counts most precious, his own life,
As spurn a true friend. Thou wilt learn in time
The truth, for time alone reveals the just,
A villain is detected in a day.
(end of monologue)
;`;
pages[14] = `color:${txtcolor};value:	;`;
pages[15] = `color:${txtcolor};value:	;`;
//Jocasta's monologue from Oedipus Rex by Sophocles 
pages[16] = `color:${txtcolor}; wrapCount:70; value:  
Jocasta's monologue from Oedipus Rex by Sophocles

Jocasta, Oedipus mother, was told her son would kill her husband and marry her.  
To prevent this, she binds her new son’s ankles together 
and leaves him on the roadside to die.  
A herdsman rescues Oedipus and gives him to the King Polybus and Queen Merope.  
In this monologue, news has arrived that the king, 
believed to be his father, has died 
– and it was not at Oedipus’s hand! Jocasta is exceedingly pleased and relieved, 
but Oedipus is still bothered by the second part of the prophecy. 
His wife tries to ease the fears of her husband (who is also her son 
– but she has not figured out this yet during this monologue)
	;`;
pages[17] = `color:${txtcolor}; wrapCount:60; value: 
Why should a mortal man, the sport of chance,
With no assured foreknowledge, be afraid?
Best live a careless life from hand to mouth.
This wedlock with thy mother fear not thou.
How oft it chances that in dreams a man
Has wed his mother! He who least regards
Such brainsick fantasies live most at ease.
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
//Oedipus's monologue from Oedipus Rex by Sophocles 
pages[24] = `color:${txtcolor}; wrapCount:65; value:  
Oedipus's monologue from Oedipus Rex by Sophocles

In this monologue Oedipus discovers he is the source of prophecy, 
facing his tragic truth which he committed unknowingly. He is blinded by his grief, 
and he decides to live as an outcast accepting his fate.
;`;
pages[25] = `color:${txtcolor}; wrapCount:60; value: 
I care not for thy counsel or thy praise, 
For with what eyes could I have e'er beheld 
My honoured father in the shades below, 
Or my unhappy mother, both destroyed By me? 
This punishment is worse than death, And so it should be. 
Sweet had been the sight Of my dear children--
them I could have wished To gaze upon&semi 
but I must never see Or them, or this fair city, 
or the palace Where I was born. 
;`;
pages[26] = `color:${txtcolor}; wrapCount:60; value:  	
Deprived of every bliss By my own lips, which doomed 
to banishment The murderer of Laius, 
and expelled The impious wretch, by gods and men accursed: 
Could I behold them after this? Oh no! 
Would I could now with equal ease remove My hearing too, 
be deaf as well as blind, And from another entrance shut out woe! 
To want our senses, in the hour of ill, Is comfort to the wretched. 


 ;`;
pages[27] = `color:${txtcolor}; wrapCount:60; value:
O Cithaeron! Why didst thou e'er receive me, or received, Why not destroy, 
that men might never know Who gave me birth? O Polybus! O Corinth! 
And thou, long time believed my father's palace, 
Oh! what a foul disgrace to human nature Didst thou receive beneath a prince's form! 
Impious myself, and from an impious race. Where is my splendour now?
(end of monologue)
 ;`;
pages[28] = `color:${txtcolor}; wrapCount:60; value: 	
 ;`;
pages[29] = `color:${txtcolor}; wrapCount:60; value:   
 
;`;
pages[30] = `color:${txtcolor};value:	;`;
pages[31] = `color:${txtcolor};value:	;`;
//Lysistrata's monologue from Lysistrata by Aristophanes 
pages[32] = `color:${txtcolor}; wrapCount:60; value:  
Lysistrata's monologue from Lysistrata by Aristophanes

In this monologue Lysistrata has gathered the women of Greece together to end the Peloponnesian War.  
She wants them to lock themselves in the treasury and withhold sex from their husbands, but a few have a little difficulty.
;`;
pages[33] = `color:${txtcolor}; wrapCount:60; value: 
Be calm then and I'll go ahead.
All the long years when the hopeless war dragged along we, unassuming,
forgotten in quiet,
Endured without question, endured in our loneliness all your incessant
child's antics and riot.
Our lips we kept tied, though aching with silence, though well all the
while in our silence we knew
How wretchedly everything still was progressing by listening dumbly the
day long to you.
 
;`;
pages[34] = `color:${txtcolor}; wrapCount:60; value:  	
For always at home you continued discussing the war and its politics
loudly, and we
Sometimes would ask you, our hearts deep with sorrowing though we spoke
lightly, though happy to see,
“What's to be inscribed on the side of the Treaty-stone
What, dear, was said in the Assembly today?”
“Mind your own business,” he'd answer me growlingly
“hold your tongue, woman, or else go away.”
And so I would hold
 ;`;
pages[35] = `color:${txtcolor}; wrapCount:60; value:
 ;`;
pages[36] = `color:${txtcolor}; wrapCount:60; value: 	
 ;`;
pages[37] = `color:${txtcolor}; wrapCount:60; value:   
;`;
pages[38] = `color:${txtcolor};value:	;`;
pages[39] = `color:${txtcolor};value:	;`;
//Magistrate 's monologue from Lysistrata by Aristophanes 
pages[40] = `color:${txtcolor}; wrapCount:60; value:  
Magistrate's monologue from Lysistrata by Aristophanes

Magistrate in Athens is a male authority figure who tried to maintain order 
especially since the woman seized the Acropolis.  
In this monologue he is talking to the men’s chorus about how we may be to blame and needing help.
;`;
pages[41] = `color:${txtcolor}; wrapCount:60; value: 
By Poseidon, god of the salt seas, it serves you right. 
We men ourselves share in the blame for this. 
We teach our wives their free and easy life 
and so intrigues come flowering out from them. 
Here’s what we tell some working artisan, 
“O goldsmith, about that necklace I bought here— 
last night my wife was dancing and the bolt slipped from its hole. 
I have to take a boat to Salamis. 
If you’ve got time tonight, 
you could visit her with that tool of yours 
and fix the way the bolt sits in her hole.” 
 
;`;
pages[42] = `color:${txtcolor}; wrapCount:70; value:  	
Another man goes to the shoemaker, a strapping lad with an enormous prick, 
and says, “O shoemaker, a sandal strap is pinching my wife’s tender little toe. 
Could you come at noon and rub her strap, stretch it really wide?” 
That’s the sort of thing hat leads to all this trouble. 
Look at me, a magistrate in charge of finding oars and thus in need of money now
—these women have shut the treasury doors to keep me out.
 ;`;
pages[43] = `color:${txtcolor}; wrapCount:60; value:
 ;`;
pages[44] = `color:${txtcolor}; wrapCount:60; value: 	
 ;`;
pages[45] = `color:${txtcolor}; wrapCount:60; value:   
;`;
pages[46] = `color:${txtcolor};value:	;`;
pages[47] = `color:${txtcolor};value:	;`;



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

