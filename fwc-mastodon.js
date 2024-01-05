class Mastodon extends HTMLElement {
  constructor() {
    super();
    this.toots = []
    this.instance = ''
    this.username = ''
    this.avatar = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzUiIGhlaWdodD0iNzkiIHZpZXdCb3g9IjAgMCA3NSA3OSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTczLjgzOTMgMTcuNDg5OEM3Mi42OTczIDkuMDAxNjUgNjUuMjk5NCAyLjMxMjM1IDU2LjUyOTYgMS4wMTYxNEM1NS4wNSAwLjc5NzExNSA0OS40NDQxIDAgMzYuNDU4MiAwSDM2LjM2MTJDMjMuMzcxNyAwIDIwLjU4NSAwLjc5NzExNSAxOS4xMDU0IDEuMDE2MTRDMTAuNTc5OCAyLjI3NjQ0IDIuNzkzOTkgOC4yODcxMiAwLjkwNDk5NyAxNi44NzU4Qy0wLjAwMzU4NTI0IDIxLjEwNTYgLTAuMTAwNTQ5IDI1Ljc5NDkgMC4wNjgyMzk0IDMwLjA5NjVDMC4zMDg4NTIgMzYuMjY1MSAwLjM1NTUzOCA0Mi40MjMgMC45MTU3NyA0OC41NjY1QzEuMzAzMDcgNTIuNjQ3NCAxLjk3ODcyIDU2LjY5NTcgMi45Mzc2MyA2MC42ODEyQzQuNzMzMjUgNjguMDQyIDEyLjAwMTkgNzQuMTY3NiAxOS4xMjMzIDc2LjY2NjZDMjYuNzQ3OCA3OS4yNzI4IDM0Ljk0NzQgNzkuNzA1NSA0Mi44MDM5IDc3LjkxNjJDNDMuNjY4MiA3Ny43MTUxIDQ0LjUyMTcgNzcuNDgxNyA0NS4zNjQ1IDc3LjIxNkM0Ny4yNzUgNzYuNjA5MiA0OS41MTIzIDc1LjkzMDUgNTEuMTU3MSA3NC43Mzg1QzUxLjE3OTcgNzQuNzIxNyA1MS4xOTgyIDc0LjcwMDEgNTEuMjExMiA3NC42NzUzQzUxLjIyNDMgNzQuNjUwNCA1MS4yMzE2IDc0LjYyMjkgNTEuMjMyNSA3NC41OTQ4VjY4LjY0MTZDNTEuMjMyMSA2OC42MTU0IDUxLjIyNTkgNjguNTg5NiA1MS4yMTQyIDY4LjU2NjFDNTEuMjAyNSA2OC41NDI2IDUxLjE4NTggNjguNTIyIDUxLjE2NTEgNjguNTA1OEM1MS4xNDQ0IDY4LjQ4OTYgNTEuMTIwNCA2OC40NzgzIDUxLjA5NDggNjguNDcyNkM1MS4wNjkyIDY4LjQ2NjkgNTEuMDQyNiA2OC40NjcgNTEuMDE3MSA2OC40NzI5QzQ1Ljk4MzUgNjkuNjc1IDQwLjgyNTQgNzAuMjc3NyAzNS42NTAyIDcwLjI2ODJDMjYuNzQzOSA3MC4yNjgyIDI0LjM0ODYgNjYuMDQyIDIzLjY2MjYgNjQuMjgyNkMyMy4xMTEzIDYyLjc2MiAyMi43NjEyIDYxLjE3NTkgMjIuNjIxMiA1OS41NjQ2QzIyLjYxOTcgNTkuNTM3NSAyMi42MjQ3IDU5LjUxMDUgMjIuNjM1NyA1OS40ODU3QzIyLjY0NjYgNTkuNDYwOSAyMi42NjMzIDU5LjQzOTEgMjIuNjg0MyA1OS40MjJDMjIuNzA1MyA1OS40MDQ4IDIyLjczIDU5LjM5MjkgMjIuNzU2NSA1OS4zODcxQzIyLjc4MyA1OS4zODEzIDIyLjgxMDQgNTkuMzgxOCAyMi44MzY3IDU5LjM4ODZDMjcuNzg2NCA2MC41ODI2IDMyLjg2MDQgNjEuMTg1MyAzNy45NTIyIDYxLjE4MzlDMzkuMTc2OCA2MS4xODM5IDQwLjM5NzggNjEuMTgzOSA0MS42MjI0IDYxLjE1MTZDNDYuNzQzNSA2MS4wMDggNTIuMTQxMSA2MC43NDU5IDU3LjE3OTYgNTkuNzYyMUM1Ny4zMDUzIDU5LjczNjkgNTcuNDMxIDU5LjcxNTQgNTcuNTM4NyA1OS42ODMxQzY1LjQ4NjEgNTguMTU3IDczLjA0OTMgNTMuMzY3MiA3My44MTc4IDQxLjIzODFDNzMuODQ2NSA0MC43NjA2IDczLjkxODQgMzYuMjM2NCA3My45MTg0IDM1Ljc0MDlDNzMuOTIxOSAzNC4wNTY5IDc0LjQ2MDYgMjMuNzk0OSA3My44MzkzIDE3LjQ4OThaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNTQ5XzM0KSIvPgo8cGF0aCBkPSJNNjEuMjQ4NCAyNy4wMjYzVjQ4LjExNEg1Mi44OTE2VjI3LjY0NzVDNTIuODkxNiAyMy4zMzg4IDUxLjA5NiAyMS4xNDEzIDQ3LjQ0MzcgMjEuMTQxM0M0My40Mjg3IDIxLjE0MTMgNDEuNDE3NyAyMy43NDA5IDQxLjQxNzcgMjguODc1NVY0MC4wNzgySDMzLjExMTFWMjguODc1NUMzMy4xMTExIDIzLjc0MDkgMzEuMDk2NSAyMS4xNDEzIDI3LjA4MTUgMjEuMTQxM0MyMy40NTA3IDIxLjE0MTMgMjEuNjM3MSAyMy4zMzg4IDIxLjYzNzEgMjcuNjQ3NVY0OC4xMTRIMTMuMjgzOVYyNy4wMjYzQzEzLjI4MzkgMjIuNzE3NiAxNC4zODQgMTkuMjk0NiAxNi41ODQzIDE2Ljc1NzJDMTguODUzOSAxNC4yMjU4IDIxLjgzMTEgMTIuOTI2IDI1LjUyNjQgMTIuOTI2QzI5LjgwMzYgMTIuOTI2IDMzLjAzNTcgMTQuNTcwNSAzNS4xOTA1IDE3Ljg1NTlMMzcuMjY5OCAyMS4zNDZMMzkuMzUyNyAxNy44NTU5QzQxLjUwNzQgMTQuNTcwNSA0NC43Mzk1IDEyLjkyNiA0OS4wMDk1IDEyLjkyNkM1Mi43MDEzIDEyLjkyNiA1NS42Nzg0IDE0LjIyNTggNTcuOTU1MyAxNi43NTcyQzYwLjE1MzEgMTkuMjkyMiA2MS4yNTA4IDIyLjcxNTIgNjEuMjQ4NCAyNy4wMjYzWiIgZmlsbD0id2hpdGUiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl81NDlfMzQiIHgxPSIzNy4wNjkyIiB5MT0iMCIgeDI9IjM3LjA2OTIiIHkyPSI3OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjNjM2NEZGIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzU2M0FDQyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo='
    this.display_name = ''
    this.last_pub_date = null
    this.link = ''

    // Set colors
    this.widget_text = '#ffffff'
    this.widget_bg = '#191b22'
    this.toots_text = '#ffffff'
    this.toots_bg = '#282c37'
    this.links = '#8c8dff'
    this.height = '420px'

    this.medias = 'all'

    const shadowRoot = this.attachShadow({mode: 'open'});
    this.render()
  }

  /**
   * Renderize the component
   */
  render() {
    this.shadowRoot.innerHTML = this.template;
    this.toots_list = this.shadowRoot.querySelector('#mtd-toots')
  }

  /**
   * In this function, we define the attributes of our component
   */
  static get observedAttributes() {
    return ['username', 'instance', 'widget-text', 'widget-bg', 'toots-text', 'toots-bg', 'links', 'height', 'medias'];
  }

  /**
   * This getter contains and returns the HTML and CSS of the component.
   */
  get template() {
    return `
      <style>
        :host {
          --widget-text: ${this.widget_text};
          --widget-bg: ${this.widget_bg};
          --toots-text: ${this.toots_text};
          --toots-bg: ${this.toots_bg};
          --links: ${this.links};
          --height: ${this.height};
        }

        #mtd-widget,
        #mtd-header,
        #mtd-footer,
        #mtd-footer > a {
          display: flex;
          align-items: center;
          width: 100%;
          flex-wrap: wrap;
          box-sizing: border-box;
        }

        #mtd-widget {
          width: fit-content;
          block-size: fit-content;
          flex-direction: column;
          border-radius: 4px;
          align-items: stretch;
          height: var(--height);
        }

        #mtd-header,
        #mtd-footer {
          height: 56px;
          background-color: var(--widget-bg);
          color: var(--widget-text);
          padding: 0 .5rem;
          gap: .5rem;
        }

        #mtd-header {
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
        }

        #mtd-footer {
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
        }

        #mtd-avatar > img,
        #mtd-footer > a > img {
          height: 32px;
          width: auto;
        }

        #mtd-footer > a {
          gap: .5rem
        }

        #mtd-avatar > img {
          border-radius: 4px;
        }

        #mtd-account > a {
          color: var(--text-widget);
          font-size: 1.1rem;
          text-decoration: none;
        }

        #mtd-toots {
          height: calc(var(--height) - 112px);
          background-color: var(--toots-bg);
          color: var(--toots-text);
          padding: 0 0.5rem;
          list-style: none;
          margin: 0;
          overflow: auto;
          word-break: break-all;
        }

        #mtd-toots > li {
          padding: 0 0.5rem 0.5rem;
        }

        #mtd-toots > li:not(:last-of-type) {
          margin-bottom: 1rem;
          border-bottom: 1px solid;
        }

        .toot-foot {
          color: #606984;
          font-size: 0.9rem;
        }

        a {
          color: var(--links);
          text-decoration: none;
        }

        .medias {
          margin-bottom: 0.5rem;
        }

        img,
        audio,
        video {
          max-width: 100%;
          height: auto;
          display: block;
        }
      </style>
      <div id="mtd-widget">
        <header id="mtd-header">
          <div id="mtd-avatar">
            <img src="${this.avatar}" />
          </div>
          <div id="mtd-account">
            <small>@${this.username}</small><br />
            <a href="${this.link}">${this.display_name}</a>
          </div>
        </header>
        <div id="mtd-toots"></div>
        <footer id="mtd-footer">
          <a href="https://joinmastodon.org/" target="_black">
            <img src="https://joinmastodon.org/logos/wordmark-white-text.svg" />
            Join us
          </a>
        </footer>
      </div>
    `
  }

  /**
   * This function is called whenever a attribute of the component label is changed.
   * @param {*} attr The attr
   * @param {*} oldVal The old value
   * @param {*} newVal The new value
   */
  async attributeChangedCallback(attr, oldVal, newVal) {
    if(attr == 'username' && oldVal != newVal) {
      if (this.username != newVal) {
        this.toots = []
        this.last_pub_date = null
      }
      this.username = newVal
      this.initData()
    }

    if(attr == 'instance' && oldVal != newVal && newVal) {
      if (!newVal.startsWith('https')) newVal = `https://${newVal}`
      if (this.instance != newVal) {
        this.toots = []
        this.last_pub_date = null
      }
      this.instance = newVal
      this.initData()
    }

    if(attr == 'medias' && oldVal != newVal && newVal) {
      this.medias = []
      newVal.split(',').forEach( m => this.medias.push(m.trim()))
      this.initData()
    }

    if (attr == 'widget-text') this.style.setProperty('--widget-text',  (!!newVal) ? newVal : '#ffffff')
    if (attr == 'widget-bg') this.style.setProperty('--widget-bg',  (!!newVal) ? newVal : '#191b22')
    if (attr == 'toots-text') this.style.setProperty('--toots-text',  (!!newVal) ? newVal : '#ffffff')
    if (attr == 'toots-bg') this.style.setProperty('--toots-bg',  (!!newVal) ? newVal : '#282c37')
    if (attr == 'links') this.style.setProperty('--links',  (!!newVal) ? newVal : '#8c8dff')
    if (attr == 'height') this.style.setProperty('--height',  (!!newVal) ? newVal : '420px')
  }

  /**
   * Initialises the component if the only mandatory attributes (user and instance) are defined.
   */
  initData() {
    if (this.username && this.instance) {
      this.render()
      this.getLastToots()
      setInterval(this.getLastToots, 60 * 1000) // 1 minute. 1 second = 1000 ms
    }
  }

  /**
   * This function takes care of getting the last toots.
   */
  getLastToots = async () => {
    const resp = await fetch(`${this.instance}/@${this.username}.rss`);
    const xml = await resp.text();
    const data = new window.DOMParser().parseFromString(xml, "text/xml")

    // Check if the linsk to the account is defined, if not, set the link avatar and display name to show
    if (!this.link) {
      this.display_name = data.querySelector('channel > title').innerHTML
      this.link = data.querySelector('channel > link').innerText
      this.avatar = data.querySelector('channel > image > url').innerHTML
      this.render()
    }

    // We store all toots obtained in the request.
    const toots = data.querySelectorAll('item')

    for (let i = toots.length -1; i >= 0; i--) {
      const toot = toots[i]
      const pubDate = Date.parse(toot.querySelector('pubDate').innerHTML)
      
      //If the date of the toot is more current than the last one stored,
      // we proceed to obtain its data and add them to the array where they are stored.
      if (!this.last_pub_date || pubDate > this.last_pub_date) {
        const getMedias = toot.getElementsByTagNameNS('*', 'content')
        const medias = []

        //We check if the toot contains media, (images, videos and/or audio),
        // and it will generate and add the corresponding tags.
        if (getMedias.length > 0 && !this.medias.includes('none')) {
          Object.values(getMedias).forEach( media => {
            const media_src = media.getAttribute('url')
            const media_type = media.getAttribute('medium')
            const mime = media.getAttribute('type')

            if (media_type == 'image' && (this.medias.includes('all') || this.medias.includes('image'))) {
              if (mime.startsWith('image'))
                medias.push(`<a href="${media_src}" target="_black"><img src="${media_src}" /></a>`)
              // Videos without audio are taken as if they were GIFs
              else if (mime == 'video/mp4' || mime == 'video/webm' )
                medias.push(`<video autoplay loop src="${media_src}"></video>`)
            }
            else if (media_type == 'audio' && (this.medias.includes('all') || this.medias.includes('audio')))
              medias.push(`<audio controls src="${media_src}"></audio>`)
            else if (media_type == 'video' && (this.medias.includes('all') || this.medias.includes('video')))
              medias.push(`<video controls src="${media_src}"></video>`)
          })
        }

        // Add the toot to the beginning of the array
        this.toots.unshift({
          description: toot.querySelector('description').innerHTML,
          link: toot.querySelector('link'),
          pubDate: pubDate,
          medias: medias
        })

        // We update the last date to check if there are new toots in the next call and fetch
        this.last_pub_date = pubDate
      }
    }

    // We show the toots
    this.showToots()
  }

  /**
   * This function is in charge of traversing and adding the toots to the component
   */
  showToots() {
    this.toots_list.innerHTML = ''
    const dateOptions = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };

    this.toots.forEach( toot => {
      const formattedDate = new Intl.DateTimeFormat(navigator.language, dateOptions).format(toot.pubDate);
      const div = document.createElement('div')
      div.innerHTML = `
        <div class="description">
          ${this.unescapeHTML(toot.description)}
        </div>
        <div class="medias">
          ${toot.medias}
        </div>
        <div class="toot-foot">
          <time class="date">
            ${formattedDate}
          </time>
          <a href="${toot.link}">View on Mastodon</a>
        </div>
      `
      this.toots_list.appendChild(div)
    })
  }

  /**
   * The content of the toots has certain escaped characters to avoid problems in the XML,
   * this function takes care of the opposite process.
   * @param {*} str 
   * @returns 
   */
  unescapeHTML(str) {
    return str.replace(
      /&amp;|&lt;|&gt;|&#39;|&quot;/g,
      tag =>
        ({
          '&amp;': '&',
          '&lt;': '<',
          '&gt;': '>',
          '&#39;': "'",
          '&quot;': '"'
        }[tag] || tag)
    );
  }
}

// And finally we define the label of the component
customElements.define('fwc-mastodon', Mastodon);
