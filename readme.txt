=== Insert Special Characters ===
Contributors:      10up, adamsilverstein, johnwatkins0, jeffpaul
Tags:              Special Characters, Character Map, Omega, Gutenberg, Block, block editor
Requires at least: 5.5
Tested up to:      6.0
Stable tag:        1.0.5
Requires PHP:      5.6
License:           GPLv2
License URI:       https://www.gnu.org/licenses/old-licenses/gpl-2.0.html

A Special Character inserter for the WordPress block editor (Gutenberg).

== Description ==

Ever wanted to add a special character while working within the WordPress block editor (Gutenberg) and suddenly find yourself longing for the days of the Classic Editor and the Special Character inserter? Well long no more, the Insert Special Characters plugin is here to ease your publishing woes!

**Note:** you can display the popover via the `ctrl`/`cmd` + `o` keyboard shortcut.

https://media.giphy.com/media/ImJtBjUD0RQqjdJkHv/giphy.mp4

Development takes place in the [GitHub repository](https://github.com/10up/insert-special-characters).

== Technical Notes ==

* Requires PHP 5.6+.
* Requires [WordPress](http://wordpress.org/) 5.2+
* Issues and Pull requests welcome in the [GitHub repository](https://github.com/10up/insert-special-characters).

== Installation ==

1. Install the plugin via the plugin installer, either by searching for it or uploading a .zip file.
2. Activate the plugin.
3. Use Insert Special Characters!

== Extending ==

To control the available tabs and characters, developers can filter the data set using the `insertspecialcharacters-characters` JavaScript (`wp.hooks`) filter.

For example, to create a character inserter that only provides currency symbols:

`
wp.hooks.addFilter(
	'insertspecialcharacters-characters',  // The filter name.
	'mycallback', // Our callback namespace.
	function( component ) { // The callback function.

		// Return the categories/characters to display.
		// The data structure is: { category: [ character data ], category2: ... }
		return {
			"Currency": [
				{ "entity": "&dollar;", "hex": "&#0024;", "name": "Dollar Sign", "char": "$" },
				{ "entity": "&euro;", "hex": "&#20AC;", "name": "Euro Sign", "char": "€" },
				{ "entity": "&cent;", "hex": "&#00A2;", "name": "Cent Sign", "char": "¢" },
				{ "entity": "&pound;", "hex": "&#00A3;", "name": "Pound Sign", "char": "£" },
				{ "entity": "&yen;", "hex": "&#00A5;", "name": "Yen Sign", "char": "¥" },
			]
		};
	}
);
`

== Frequently Asked Questions ==

= How come I do not see all the special characters? =

When a character is displayed using a font that doesn't support that character, a default "not defined" glyph from that font is used. The "not defined" glyph in most fonts has the appearance of a rectangular box, or some variation of that.

One example of a font with support for wide range of glyphs is the [Noto](https://fonts.google.com/noto) family by Google Fonts, which can be loaded by the theme to render the missing characters.

== Screenshots ==

1. "Special Characters" option in Paragraph Block menu.
2. Initial special characters, showing the "Math" character set.
3. Filtering the special characters via search.
4. Resulting inserted special character (note focus on special character, rest of window has been blurred).

== Changelog ==

= 1.0.5 - 2022-07-18 =
**Note that this release bumps the WordPress minimum supported version from 5.4 to 5.5.**

* **Added:** Most and last used character palette. Most used palette can be turned on by going to `Settings > Writing` (props [@Sidsector9](https://github.com/Sidsector9), [@faisal-alvi](https://github.com/faisal-alvi) via [#147](https://github.com/10up/insert-special-characters/pull/147)).
* **Added:** End-to-end testing with Cypress (props [@Sidsector9](https://github.com/Sidsector9), [@iamdharmesh](https://github.com/iamdharmesh) via [#116](https://github.com/10up/insert-special-characters/pull/116)).
* **Added:** More robust PHP testing, including PHP 8 compatibility (props [@Sidsector9](https://github.com/Sidsector9), [@dkotter](https://github.com/dkotter), [@cadic](https://github.com/cadic) via [#118](https://github.com/10up/insert-special-characters/pull/118), [#129](https://github.com/10up/insert-special-characters/pull/129)).
* **Added:** Dependency security scanning (props [@jeffpaul](https://github.com/jeffpaul), [@Sidsector9](https://github.com/Sidsector9) via [#126](https://github.com/10up/insert-special-characters/pull/126)).
* **Changed:** Character palette UI changed to be in alignment with Gutenberg (props [@Sidsector9](https://github.com/Sidsector9), [@faisal-alvi](https://github.com/faisal-alvi) via [#147](https://github.com/10up/insert-special-characters/pull/147)).
* **Changed:** Bump WordPress version "tested up to" 6.0 (props [@vikrampm1](https://github.com/vikrampm1), [@jeffpaul](https://github.com/jeffpaul) via [#125](https://github.com/10up/insert-special-characters/pull/125)).
* **Changed:** Bump WordPress minimum supported version from 5.4 to 5.5 (props [@dkotter](https://github.com/dkotter), [@jeffpaul](https://github.com/jeffpaul), [@peterwilsoncc](https://github.com/peterwilsoncc) via [#150](https://github.com/10up/insert-special-characters/pull/150)).
* **Changed:** Release instructions to ensure dependency updates are included (props [@jeffpaul](https://github.com/jeffpaul) via [#155](https://github.com/10up/insert-special-characters/pull/155)).
* **Fixed:** Address an issue where the inserter popup can overflow which prevents user from selecting characters (props [@cldhmmr](https://github.com/cldhmmr), [@Sidsector9](https://github.com/Sidsector9), [@peterwilsoncc](https://github.com/peterwilsoncc) via [#130](https://github.com/10up/insert-special-characters/pull/130)).
* **Fixed:** Ensure required WordPress libraries were included as dependencies (props [@peterwilsoncc](https://github.com/peterwilsoncc), [@Sidsector9](https://github.com/Sidsector9), [@iamdharmesh](https://github.com/iamdharmesh) via [#132](https://github.com/10up/insert-special-characters/pull/132)).
* **Security:** Bump `guzzlehttp/psr7` from 1.6.1 to 1.8.5 (props [@dependabot](https://github.com/apps/dependabot) via [#119](https://github.com/10up/insert-special-characters/pull/119)).
* **Security:** Bump `minimist` from 1.2.5 to 1.2.6 (props [@dependabot](https://github.com/apps/dependabot) via [#120](https://github.com/10up/insert-special-characters/pull/120)).
* **Security:** Bump `ansi-regex` from 3.0.0 to 3.0.1 (props [@dependabot](https://github.com/apps/dependabot) via [#121](https://github.com/10up/insert-special-characters/pull/121)).
* **Security:** Bump `async` from 2.6.3 to 2.6.4 (props [@dependabot](https://github.com/apps/dependabot) via [#124](https://github.com/10up/insert-special-characters/pull/124)).
* **Security:** Bump `semver-regex` from 3.1.3 to 3.1.4 (props [@dependabot](https://github.com/apps/dependabot) via [#128](https://github.com/10up/insert-special-characters/pull/128)).
* **Security:** Bump `react-character-map` from 0.4.4 to 0.4.6 (props [@dependabot](https://github.com/apps/dependabot) via [#139](https://github.com/10up/insert-special-characters/pull/139)).
* **Security:** Bump `@wordpress/env` from 4.3.1 to 4.9.0 (props [@dependabot](https://github.com/apps/dependabot) via [#140](https://github.com/10up/insert-special-characters/pull/140)).
* **Security:** Bump `@10up/cypress-wp-utils` from `ecf048c` to `d52e775` (props [@dependabot](https://github.com/apps/dependabot) via [#142](https://github.com/10up/insert-special-characters/pull/142)).
* **Security:** Bump `husky` from 4.3.8 to 8.0.1 (props [@dependabot](https://github.com/apps/dependabot) via [#144](https://github.com/10up/insert-special-characters/pull/144)).

= 1.0.4 - 2022-01-27 =
* **Added:** Many new special characters (e.g., ⅐, ⅑, ⅒, single quotation marks, ß, ẞ, Ć, ć, Ḉ, ḉ) and grouping (Music) (props [@jeffpaul](https://github.com/jeffpaul), [@Sidsector9](https://github.com/Sidsector9)).
* **Added:** Issue management automation and CodeQL analysis via GitHub Actions (props [@jeffpaul](https://github.com/jeffpaul), [@cadic](https://github.com/cadic)).
* **Changed:** Move icon from dropdown to block format toolbar (props [@pabamato](https://github.com/pabamato), [@jeffpaul](https://github.com/jeffpaul), [@Sidsector9](https://github.com/Sidsector9), [@mahnunchik](https://github.com/mahnunchik)).
* **Changed:** Updated `react-character-map` from 0.4.2 to 0.4.4 (props [@jeffpaul](https://github.com/jeffpaul), [@Sidsector9](https://github.com/Sidsector9)).
* **Changed:** Bump WordPress "tested up to" version 5.9 (props [@cadic](https://github.com/cadic), [@sudip-10up](https://github.com/sudip-10up)).
* **Changed:** Documentation updates (props [@faisal-alvi](https://github.com/faisal-alvi), [@sudip-10up](https://github.com/sudip-10up)).
* **Fixed:** Character map popover scrolling issue on mobile viewport (props [@ajmaurya99](https://github.com/ajmaurya99), [@Sidsector9](https://github.com/Sidsector9), [@adamsilverstein](https://github.com/adamsilverstein), [@helen](https://github.com/helen)).

= 1.0.3 - 2021-08-17 =
* **Added:** Many new special characters (e.g., em dash, en dash, hair space, thin space, no-break space, en space, em space, zero width non-joiner, non-breaking hyphen) and groupings (Currency, Punctuation, Greek).
* **Added:** Focus style on buttons to improve accessibility for keyboard users (props [@samikeijonen](https://profiles.wordpress.org/samikeijonen/)).
* **Added:** WP Acceptance tests (props [@johnwatkins0](https://profiles.wordpress.org/johnwatkins0/), [@jeffpaul](https://profiles.wordpress.org/jeffpaul/)).
* **Changed:** Update to React Character Map `v0.4.2` (props [@johnwatkins0](https://profiles.wordpress.org/johnwatkins0/), [@dinhtungdu](https://profiles.wordpress.org/dinhtungdu/), [@jeffpaul](https://profiles.wordpress.org/jeffpaul/)).
* **Changed:** Integrate [@wordpress/scripts](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) for building and linting (props [@johnwatkins0](https://profiles.wordpress.org/johnwatkins0/), [@ocean90](https://profiles.wordpress.org/ocean90/), [@adamsilverstein](https://profiles.wordpress.org/adamsilverstein/)).
* **Changed:** Renamed release branch from `master` to `trunk`, so please make sure to update and direct references to `master` in downstream code (props [@jeffpaul](https://profiles.wordpress.org/jeffpaul/)).
* **Changed:** Bump WordPress version "tested up to" 5.8 (props [@jeffpaul](https://profiles.wordpress.org/jeffpaul/), [@davidchabbi](https://profiles.wordpress.org/davidchabbi/), [@pabamato](https://profiles.wordpress.org/pabamato/), [@ankitguptaindia](https://profiles.wordpress.org/ankit-k-gupta/), [@phpbits](https://profiles.wordpress.org/phpbits/), [@BBerg10up](https://github.com/BBerg10up)).
* **Changed:** Documentation updates (props [@bobbingwide](https://profiles.wordpress.org/bobbingwide/)).
* **Fixed:** Make UI text in the component translatable (props [@johnwatkins0](https://profiles.wordpress.org/johnwatkins0/), [@dinhtungdu](https://profiles.wordpress.org/dinhtungdu/)).
* **Fixed:** Popover initial focus on top instead of bottom or center of the contents (props [@phpbits](https://profiles.wordpress.org/phpbits/), [@BBerg10up](https://github.com/BBerg10up)).
* **Fixed:** Compatility with the new widget screen in WordPress 5.8 and formatting of returned elements (props [@phpbits](https://profiles.wordpress.org/phpbits/)).
* **Security:** Bump `acorn` from 5.7.3 to 5.7.4 (props [@dependabot](https://github.com/apps/dependabot)).
* **Security:** Bump `ini` from 1.3.5 to 1.3.7 (props [@dependabot](https://github.com/apps/dependabot)).
* **Security:** Bump `elliptic` from 6.5.2 to 6.5.4 (props [@dependabot](https://github.com/apps/dependabot)).
* **Security:** Bump `y18n` from 4.0.0 to 4.0.1 (props [@dependabot](https://github.com/apps/dependabot)).
* **Security:** Bump `rmccue/requests` from 1.7.0 to 1.8.0 (props [@dependabot](https://github.com/apps/dependabot)).
* **Security:** Bump `ssri` from 6.0.1 to 6.0.2 (props [@dependabot](https://github.com/apps/dependabot)).
* **Security:** Bump `lodash` from 4.17.15 to 4.17.21 (props [@dependabot](https://github.com/apps/dependabot)).
* **Security:** Bump `browserslist` from 4.8.7 to 4.16.6 (props [@dependabot](https://github.com/apps/dependabot)).
* **Security:** Bump `path-parse` from 1.0.6 to 1.0.7 (props [@dependabot](https://github.com/apps/dependabot)).

= 1.0.2 - 2019-11-22 =
* **Changed:** Relicensed from MIT to GPLv2.
* **Fixed:** Hook on `enqueue_block_editor_assets` so script is only enqueued in editor (props [@adamsilverstein](https://profiles.wordpress.org/adamsilverstein/), [@josch87](https://profiles.wordpress.org/josch87/)).
* **Fixed:** Register text domain to ensure translations can be loaded (props [@ocean90](https://profiles.wordpress.org/ocean90/)).
* **Fixed:** Bump WordPress version "tested up to" 5.3 (props [@adamsilverstein](https://profiles.wordpress.org/adamsilverstein/)).
* **Fixed:** Documentation and credits (props [@jeffpaul](https://profiles.wordpress.org/jeffpaul/)).

= 1.0.1 - 2019-09-06 =
* **Added:** Documentation for keyboard shortcut (props [@mrwweb](https://profiles.wordpress.org/mrwweb/), [@jeffpaul](https://profiles.wordpress.org/jeffpaul/)).
* **Fixed:** Ensure character map appears as expected in Firefox (props [@adamsilverstein](https://profiles.wordpress.org/adamsilverstein/)).

= 1.0.0 - 2019-08-21 =
* **Added:** Initial plugin release 🎉.
* **Added:** Wrap [React Character Map](https://github.com/Dayjo/react-character-map) in a Gutenberg Popover (props [@adamsilverstein](https://profiles.wordpress.org/adamsilverstein/)).
* **Added:** Plugin header and icon images (props [@dillonmccallum](https://profiles.wordpress.org/dillonmccallum/)).

== Upgrade Notice ==

= 1.0.5 =
This release bumps the WordPress minimum supported version from 5.4 to 5.5.
