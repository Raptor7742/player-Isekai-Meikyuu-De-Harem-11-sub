const playerInstance = jwplayer("player").setup({
  controls: true,
  sharing: true,
  displaytitle: true,
  displaydescription: true,
  abouttext: "",
  aboutlink: "",

  skin: {
    name: "netflix"
  },

  logo: {
    file:
      "",
    link: ""
  },

  captions: {
    color: "#FFF",
    fontSize: 14,
    backgroundOpacity: 0,
    edgeStyle: "raised"
  },

  playlist: [
    {
      title: "Isekai Meikyuu De Harem - épisode 11 VOSTFR",
      description: "Vous regardez",
      image: "https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2022/03/isekaimeikyuudeharemwo_keyvisual-1-e1648179739159.jpg?resize=696%2C391&ssl=1",
      sources: [
        {
          file:
            "",
          label: "1080p",
          default: true
        },
        {
          file:
            "https://m204.syncusercontent.com/mfs-60:71e0ac4c132c4ded03b55db82839298d=============================/p/%5BTsundere-Raws%5D_Isekai_Meikyuu_de_Harem_wo_-_11_VOSTFR_(CR)_%5BWEB_720p_x264_AAC%5D.mp4?allowdd=0&datakey=LCPYZ4fJBXR6DtjLlJsw6ZrGYg3IkjlHl4At53Gy86EcMpZ3Ka+tfygVm4U9VT067w5gZJemJK/1/GHApgdwLM6JOD2lVamxcwlG0p9TmtIzJMOP4WSp0YT/YCgnFfJC2zVojRieCAenyF7LEDZIhl3i/IFmwlRjEZAXPQylfFTNKoEvoZTO66bQ93v2xw7aglWcx/vSByqc1AtJHBwpshrZJ+W/XDcaScfXW2Ner+8z/vzqFvJrr3tThBUFETqIyW8T+Wgm7ZDDlCr52oGIGqLZ/lraAVk2l4znQUiADcp7JEFBismVbqISdYDaML3HEXhUuurSC38vdnMEO1s9IQ&engine=ln-2.3.7.3&errurl=QYhxE0aRsl2Gj51Od84kjTT83YZIessJkCIHQ1THUQeuczORQDvU2NVevMPuqKCHzsq4CVlB9WSFEnMChWGXottIxPlJQX310sK75VFqM7kS6uczWbmhVemAbwYUa24DvpZJaZZka4Xf4W96tBexlkLsUeY9JajrXWYszIsKqbABvGJUVI8t14Uf4hvKp7ie5ZVWLbHHk2gfQPrQTqVYhJ3dwsfHAuzXH2w+oja5ZKEJGz7w59/m2oJ9O3oku/wiWLhp7omKZr/w33j9U2KydQVJtb1aJ1Sc3+7Nf0aqM84i8+8VuIMJsN609R73GQpaV8AYTEyP/1Q+TW8VAicmBw==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iJTVCVHN1bmRlcmUtUmF3cyU1RF9Jc2VrYWlfTWVpa3l1dV9kZV9IYXJlbV93b18tXzExX1ZPU1RGUl8oQ1IpXyU1QldFQl83MjBwX3gyNjRfQUFDJTVELm1wNCI7ZmlsZW5hbWUqPVVURi04JyclNUJUc3VuZGVyZS1SYXdzJTVEX0lzZWthaV9NZWlreXV1X2RlX0hhcmVtX3dvXy1fMTFfVk9TVEZSXyhDUilfJTVCV0VCXzcyMHBfeDI2NF9BQUMlNUQubXA0Ow&ipaddress=1458994159&linkcachekey=b655b6fc0&linkoid=652170001&mode=101&sharelink_id=9104619970001&timestamp=1672599145072&uagent=220523ca5285197b0fad467e0e72e6907a6c5738&signature=661120e7c0d34bee91a34418fc7fd570ce92b4fc&cachekey=60:71e0ac4c132c4ded03b55db82839298d=============================",
          label: "720p"
        },
        {
          file:
            "",
          label: "480p"
        },
        {
          file:
            "",
          label: "360p"
        },
        {
          file:
            "",
          label: "240p"
        },
        {
          file:
            "",
          label: "160p"
        }
      ],
      
      tracks: [
        {
          file: "",
          kind: "thumbnails"
        }
      ]
    }
  ],
  advertising: {
    client: "vast",
    schedule: [
      {
        offset: "pre",
        tag:
          "https://www.videosprofitnetwork.com/watch.xml?key=d904b92c1f6cc769c59d030320a66f69"
      }
    ]
  }
});

playerInstance.on("ready", function () {
  const buttonId = "download-video-button";
  const iconPath =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTMgMTloMTh2Mkgzdi0yem0xMC01LjgyOEwxOS4wNzEgNy4xbDEuNDE0IDEuNDE0TDEyIDE3IDMuNTE1IDguNTE1IDQuOTI5IDcuMSAxMSAxMy4xN1YyaDJ2MTEuMTcyeiIgZmlsbD0icmdiYSgyNDcsMjQ3LDI0NywxKSIvPjwvc3ZnPg==";
  const tooltipText = "Download Video";

  // Call the player's `addButton` API method to add the custom button
  playerInstance.addButton(iconPath, tooltipText, buttonClickAction, buttonId);

  // This function is executed when the button is clicked
  function buttonClickAction() {
    const playlistItem = playerInstance.getPlaylistItem();
    const anchor = document.createElement("a");
    const fileUrl = playlistItem.file;
    anchor.setAttribute("href", fileUrl);
    const downloadName = playlistItem.file.split("/").pop();
    anchor.setAttribute("download", downloadName);
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  // Move the timeslider in-line with other controls
  const playerContainer = playerInstance.getContainer();
  const buttonContainer = playerContainer.querySelector(".jw-button-container");
  const spacer = buttonContainer.querySelector(".jw-spacer");
  const timeSlider = playerContainer.querySelector(".jw-slider-time");
  buttonContainer.replaceChild(timeSlider, spacer);

  // Detect adblock
  playerInstance.on("adBlock", () => {
    const modal = document.querySelector("div.modal");
    modal.style.display = "flex";

    document
      .getElementById("close")
      .addEventListener("click", () => location.reload());
  });

  // Forward 10 seconds
  const rewindContainer = playerContainer.querySelector(
    ".jw-display-icon-rewind"
  );
  const forwardContainer = rewindContainer.cloneNode(true);
  const forwardDisplayButton = forwardContainer.querySelector(
    ".jw-icon-rewind"
  );
  forwardDisplayButton.style.transform = "scaleX(-1)";
  forwardDisplayButton.ariaLabel = "Forward 10 Seconds";
  const nextContainer = playerContainer.querySelector(".jw-display-icon-next");
  nextContainer.parentNode.insertBefore(forwardContainer, nextContainer);

  // control bar icon
  playerContainer.querySelector(".jw-display-icon-next").style.display = "none"; // hide next button
  const rewindControlBarButton = buttonContainer.querySelector(
    ".jw-icon-rewind"
  );
  const forwardControlBarButton = rewindControlBarButton.cloneNode(true);
  forwardControlBarButton.style.transform = "scaleX(-1)";
  forwardControlBarButton.ariaLabel = "Forward 10 Seconds";
  rewindControlBarButton.parentNode.insertBefore(
    forwardControlBarButton,
    rewindControlBarButton.nextElementSibling
  );

  // add onclick handlers
  [forwardDisplayButton, forwardControlBarButton].forEach((button) => {
    button.onclick = () => {
      playerInstance.seek(playerInstance.getPosition() + 10);
    };
  });
});
