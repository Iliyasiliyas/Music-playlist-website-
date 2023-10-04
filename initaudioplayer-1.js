jQuery(document).ready(function(){
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initaudioplayer-1\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    jQuery("#amazingaudioplayer-1").amazingaudioplayer({
        jsfolder:jsFolder,
        skinsfoldername:"",
        titleinbarwidthmode:"fixed",
        timeformatlive:"%CURRENT% / LIVE",
        volumeimagewidth:24,
        barbackgroundimage:"bg img1.jpg",
        showvolumebar:true,
        showtime:true,
        titleinbarwidth:80,
        showprogress:true,
        random:false,
        titleformat:"%TITLE%",
        height:900,
        imageheight:377,
        loopimage:"loop-24-24-1.png",
        prevnextimage:"prevnext-48-48-0.png",
        showinfo:true,
        tracklistitem:10,
        skin:"Jukebox",
        responsive:true,
        loopimagewidth:20,
        showstop:true,
        prevnextimageheight:48,
        infoformat:"%ARTIST% %ALBUM%<br />%INFO%",
        volumeimageheight:24,
        stopotherplayers:true,
        showloading:true,
        forcefirefoxflash:false,
        tracklistscroll:true,
        preloadaudio:true,
        tracklistarrowimagewidth:48,
        stopimagewidth:48,
        imagefullwidth:true,
        skinsfoldername:"",
        width:900,
        showtitleinbar:true,
        showtracklist:true,
        volumeimage:"volume-24-24-1.png",
        playpauseimagewidth:48,
        loopimageheight:24,
        tracklistitemformat:"<div class='amazingaudioplayer-item-id'>%ID%</div><div class='amazingaudioplayer-item-info'>%DURATION%</div><div class='amazingaudioplayer-item-title'>%TITLE%</div>",
        prevnextimagewidth:48,
        tracklistarrowimage:"tracklistarrow-48-16-0.png",
        forceflash:false,
        playpauseimageheight:48,
        showbackgroundimage:true,
        stopimage:"stop-48-48-0.png",
        showvolume:true,
        defaultvolume:100,
        forcehtml5:false,
        showprevnext:true,
        backgroundimage:"2 - Copy.gif",
        loadingformat:"Loading...",
        progressheight:8,
        showtracklistbackgroundimage:false,
        showtitle:true,
        tracklistarrowimageheight:16,
        heightmode:"fixed",
        titleinbarformat:"%TITLE%",
        stopimageheight:48,
        volumebarpadding:20,
        showbarbackgroundimage:false,
        volumebarheight:20,
        noncontinous:false,
        tracklistbackgroundimage:"",
        showloop:true,
        showimage:true,
        imagewidth:450,
        timeformat:"%CURRENT% / %DURATION%",
        autoplay:false,
        fullwidth:false,
        loop:1,
        playpauseimage:"playpause-48-48-0.png"
    });
});