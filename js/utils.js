
/**
 * parseUri 1.2.2
 * @ Steven Levithan <stevenlevithan.com>
 * Jun 29, 2007
 * MIT License
 *
 * I just made it into an arrow function -> Ilker Balpinar, Jan 02, 2024
 */

export const parseUri = (str) => {
   var   o = parseUri.options,
         m = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
         uri = {},
         i = 14;

   while (i--) uri[o.key[i]] = m[i] || "";

   uri[o.q.name] = {};
   uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
      if ($1) uri[o.q.name][$1] = $2;
   });

   return uri;
};

parseUri.options = {
	strictMode: false,
	key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
	q:   {
		name:   "queryKey",
		parser: /(?:^|&)([^&=]*)=?([^&]*)/g
	},
	parser: {
		strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
		loose:  /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
	}
};

// Warning: This function only returns the first element of the input html!
export const elementFromHtml = (html) => {
   const template = document.createElement("template");
   template.innerHTML = html.trim();
   return template.content.firstElementChild;
}

export const referrer = document.referrer;

export const toggleButton =
   `<div class="darkmode_toggle_container">
      <input type="checkbox" id="darkmode_toggle"/>
      <label for="darkmode_toggle">
         <svg version="1.1" class="light_mode" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 496 496" style="enable-background:new 0 0 496 496;" xml:space="preserve"></svg>
         <svg version="1.1" class="dark_mode" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 49.739 49.739"  xml:space="preserve"></svg>
      </label>
   </div>`;

export const backButton =
   `<div class="back_button_container">
      <button class="back_button" role="button">
         <div class="left_arrow"><</div>
         <div class="text">Back</div>
      </button>
   </div>`;

export const email = `<svg class="icon_email" xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 93.84 512 324.386" xmlns:v="https://vecta.io/nano"><path d="M496.327 127.091l-15.673 9.613L281.83 258.623c-7.983 4.859-16.917 7.293-25.84 7.293s-17.826-2.424-25.778-7.262l-.136-.084L31.347 134.771l-15.673-9.759L0 115.242v302.717h512V117.488l-15.673 9.603zM25.245 94.041l25.161 15.673 25.161 15.673 171.008 106.527a18.18 18.18 0 0 0 18.913-.042L439.14 125.386l25.558-15.673 25.558-15.673H25.245z"/></svg>`;
export const mobile = `<svg class="icon_mobile" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 278.048 512" xmlns:v="https://vecta.io/nano"><path d="M224.589.408H53.387C24.095.408.266 24.236.266 53.529v405.756c0 29.292 23.83 53.123 53.121 53.123h171.202c29.292 0 53.121-23.83 53.121-53.119V53.529c0-29.293-23.829-53.121-53.121-53.121zM117.898 453.842a1 1 0 0 1 .988-.988h40.202a1 1 0 0 1 .988.988v13.684a1 1 0 0 1-.988.988h-40.202a1 1 0 0 1-.988-.988v-13.684zm42.178-23.75a1 1 0 0 1-.988.988h-40.202a1 1 0 0 1-.988-.988v-13.684a1 1 0 0 1 .988-.984h40.202a1 1 0 0 1 .988.984v13.684zm0-37.434a.99.99 0 0 1-.988.988h-40.202a.99.99 0 0 1-.988-.988v-13.68a1 1 0 0 1 .988-.988h40.202a1 1 0 0 1 .988.988v13.68zm-21.089-40.774c-13.461 0-24.414-10.951-24.414-24.412s10.953-24.416 24.414-24.416 24.416 10.953 24.416 24.416-10.953 24.412-24.416 24.412zM53.385 36.712h171.202c10.004 0 18.142 8.137 18.142 18.144v225.136H35.245V54.857c0-10.008 8.138-18.145 18.14-18.145zm40.953 279.679v22.162H50.596L36.69 316.391h57.648zm-8.325 113.701a1 1 0 0 1-.986.988H44.823a1 1 0 0 1-.986-.988v-13.684c0-.542.443-.984.986-.984h40.204c.544 0 .986.443.986.984v13.684zm0-37.434a.99.99 0 0 1-.986.988H44.823a.99.99 0 0 1-.986-.988v-13.68a1 1 0 0 1 .986-.988h40.204a1 1 0 0 1 .986.988v13.68zm-42.176 74.868v-13.684a1 1 0 0 1 .986-.988h40.204a1 1 0 0 1 .986.988v13.684a1 1 0 0 1-.986.988H44.823a1 1 0 0 1-.986-.988zm197.446-151.135l-13.905 22.162h-43.742v-22.162h57.647zm-7.144 113.701a1 1 0 0 1-.988.988h-40.202a1 1 0 0 1-.988-.988v-13.684c0-.542.443-.984.988-.984h40.202c.546 0 .988.443.988.984v13.684zm0-37.434a.99.99 0 0 1-.988.988h-40.202a.99.99 0 0 1-.988-.988v-13.68a1 1 0 0 1 .988-.988h40.202a1 1 0 0 1 .988.988v13.68zm-42.178 74.868v-13.684a1 1 0 0 1 .988-.988h40.202a1 1 0 0 1 .988.988v13.684a1 1 0 0 1-.988.988h-40.202a1 1 0 0 1-.988-.988z"/></svg>`;
export const location = `<svg class="icon_location" xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800" viewBox="111.734 0 288.617 416.435" xmlns:v="https://vecta.io/nano"><path d="M256 416a32 32 0 0 0 26.125-13.523C294.195 385.414 400 233.016 400 137.602 400 61.727 335.398 0 256 0S112 61.727 112 137.602c0 95.414 105.805 247.813 117.875 264.875A32 32 0 0 0 256 416zm-48-271.952C208 117.516 229.492 96 256 96c26.532 0 48 21.516 48 48.048S282.532 192 256 192c-26.508 0-48-21.423-48-47.952z"/></svg>`;
export const linkedin = `<svg class="icon_linkedin" xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 32 32" xmlns:v="https://vecta.io/nano"><path d="M28.778 1.004H3.218h-.027c-1.199 0-2.172.964-2.186 2.159v25.672c.014 1.196.987 2.161 2.186 2.161h.029 25.555.028c1.2 0 2.175-.963 2.194-2.159v-.002-25.67c-.019-1.197-.994-2.161-2.195-2.161h-.029.001zM9.9 26.562H5.446V12.251H9.9zM7.674 10.293a2.58 2.58 0 0 1-2.579-2.579 2.58 2.58 0 0 1 2.579-2.579 2.58 2.58 0 0 1 2.579 2.578h0a2.58 2.58 0 0 1-2.577 2.581h-.003zm18.882 16.269h-4.441v-6.959c0-1.66-.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441V12.252h4.266v1.951h.058c.828-1.395 2.326-2.315 4.039-2.315l.181.003h-.009c4.5 0 5.332 2.962 5.332 6.817v7.855z"/></svg>`;
