(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
function on(a,f){a.forEach(function(x){x.addEventListener('input',f);x.addEventListener('change',f);});f();}
var wh=$('wd-h');if(wh){var wb=$('wd-b'),ws=$('wd-s');
 on([wh,wb,ws],function(){var h=parseInt(wh.value,10),b=parseInt(wb.value,10),s=parseInt(ws.value,10);
  var lvl=h<5000?0:h<10000?1:h<15000?2:h<20000?3:4;if(s===0)lvl=Math.min(lvl,0);else if(s===1)lvl=Math.min(lvl,2);
  var T=['Showerproof only','Light rain','Steady rain','Heavy rain','Storm ready'][lvl],D=['Fine for a dash between buildings or a passing shower.','Good for town and short walks in light to moderate rain.','Reliable for a wet commute or a day walk in steady rain.','Handles hours of heavy rain, including under a light pack.','Built for prolonged heavy rain and the pressure of a loaded pack.'][lvl];
  var br=b===0?'Breathability is not stated, so expect it to feel clammy when you work hard.':b<10000?'Breathability suits standing and gentle walking.':b<20000?'Breathability suits brisk walking and everyday use.':'Breathability is high enough for fast, sweaty effort.';
  var sm=s===0?'Untaped seams will leak in sustained rain whatever the fabric rating.':s===1?'Only the main seams are sealed; expect seepage elsewhere in long downpours.':'Every seam is sealed, so the fabric rating is what you get.';
  $('wd-r').innerHTML='<strong>'+T+'</strong><p>'+D+'</p><ul><li>'+br+'</li><li>'+sm+'</li></ul>';});}
var rw=$('rp-w');if(rw){var rm=$('rp-m'),rb=$('rp-b');
 on([rw,rm,rb],function(){var w=Math.min(7,Math.max(1,parseInt(rw.value,10)||1)),m=Math.max(0,parseInt(rm.value,10)||0),b=rb.value,wears=Math.round(w*m*4.3),every=Math.max(2,Math.round(11/w));
  var t,p;
  if(b==='soak'){t='Wash and reproof now';p='The repellent finish has gone. Wash with a technical cleaner, then apply a wash-in or spray-on treatment.';}
  else if(b==='patch'){t=wears>=10?'Wash now, then test':'Wash soon';p='Patchy darkening usually means dirt is masking the finish. Wash, dry with gentle heat if the label allows, then do the splash test. Reproof only if water still soaks in.';}
  else{t=wears>=12?'Due a wash':'All good';p=wears>=12?'It still beads, but about '+wears+' wears of sweat and dirt are clogging the membrane. A wash will help it breathe.':'The finish is working. No action needed yet.';}
  $('rp-r').innerHTML='<strong>'+t+'</strong><p>'+p+'</p><ul><li>About '+wears+' wears since the last wash</li><li>At your rate, wash roughly every '+every+' weeks</li><li>Expect to reproof every three to four washes</li></ul>';});}
var lt=$('ly-t');if(lt){var lr=$('ly-r'),le=$('ly-e');
 on([lt,lr,le],function(){var t=parseInt(lt.value,10),r=parseInt(lr.value,10),e=parseInt(le.value,10),warm=t+e;
  var base=t>=3?'Light synthetic T-shirt':t===2?'Short or long-sleeve wicking base layer':t===1?'Long-sleeve merino or synthetic base layer':'Midweight thermal base layer';
  var mid=warm>=4?'None; carry a thin fleece in case you stop':warm===3?'Thin fleece or light gilet':warm===2?'Midweight fleece':warm===1?'Fleece plus a light insulated jacket':'Insulated jacket under the shell';
  var shell=r===0?'Light packable shell, 5,000 mm or more':r===1?'Waterproof shell, 10,000 mm, fully taped':'Three-layer shell, 20,000 mm, with a peaked hood';
  var ex=[];if(r>=1)ex.push('waterproof overtrousers');if(e===2)ex.push('open the pit zips on climbs');if(t<=1)ex.push('hat and gloves');if(r===2)ex.push('cinch the hood and hem');
  $('ly-r2').innerHTML='<strong>'+(warm>=4?'Light layers':warm>=2?'Three layers':'Full winter layers')+'</strong><ul><li><b>Base:</b> '+base+'</li><li><b>Mid:</b> '+mid+'</li><li><b>Shell:</b> '+shell+'</li></ul>'+(ex.length?'<p>Also: '+ex.join(', ')+'.</p>':'');});}
})();
