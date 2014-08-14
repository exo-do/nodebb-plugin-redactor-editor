# NodeBB: Redactor Editor<sup>*</sup>

###	 _<sup>*</sup>This plugin does not include the Redactor editor_	

__Redactor__: [http://imperavi.com/redactor/](http://imperavi.com/redactor/) is a briliantly concieved HTML5 WYSIWYG editor (not free, but well worth the money on a production site).

This aims at simplifying the user experience whilst editing content. 

## Notice

For this to work you *must* turn off sanitization in the markup plugin. (You can leave the markdown plugin installed and still have MD goodness!)

Safety: For simplicity, install the sanitization plugin [https://github.com/akhoury/nodebb-plugin-sanitizehtml](https://github.com/akhoury/nodebb-plugin-sanitizehtml) and simply make sure you mirror your allowed tags in the initialization script in `client-scripts`

## Installation

Add your Redactor code to the `redactor` folder, make changes to the config in `client-scripts` and you are good to go.

 
## Action shot

![Imgur](http://i.imgur.com/fFpD66P.png)
    