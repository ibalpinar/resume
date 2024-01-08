
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
