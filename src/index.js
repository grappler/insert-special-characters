const { registerFormatType, toggleFormat, insert } = wp.richText;
const { getRectangleFromRange } = wp.dom;
const { applyFilters } = wp.hooks;
const { __ } = wp.i18n;

import { CharacterMap } from 'react-character-map';
import { BlockControls } from '@wordpress/block-editor';
import { Popover, Toolbar, IconButton } from '@wordpress/components';

import './insert-special-characters.css';

// Load the default Chars provided by react-character-map component.
import Chars from '../node_modules/react-character-map/dist/component/chars.json';

const InsertSpecialCharactersOptions = {
	name: 'insertspecialcharacters',
	title: __( 'Special Characters', 'insert-special-characters' ),
	character: 'Special Characters',
	value: '',
};

const { name, title, character } = InsertSpecialCharactersOptions;
const type = `special-characters/${ name }`;
let anchorRange;

/**
 * Register the "Format Type" to create the character inserter.
 */
registerFormatType( type, {
	title,
	tagName: name,
	className: null,
	active: false,

	/**
	 * The `edit` function is called when the Character Map is selected.
	 */
	edit( { isActive, value, onChange } ) {
		const onToggle = () => {
			// Set up the anchorRange when the Popover is opened.
			const selection = window.getSelection();
			anchorRange =
				selection.rangeCount > 0 ? selection.getRangeAt( 0 ) : null;
			onChange( toggleFormat( value, { type } ) );
		};

		// Pin the Popover to the caret position.
		const anchorRect = () => {
			return getRectangleFromRange( anchorRange );
		};

		// Display the character map when it is active.
		const characters = applyFilters( `${ name }-characters`, Chars );

		const specialPopover = isActive && (
			<Popover
				className="character-map-popover"
				position="bottom center"
				focusOnMount="firstElement"
				key="charmap-popover"
				onClick={ () => {} }
				getAnchorRect={ anchorRect }
				expandOnMobile={ true }
				headerTitle={ __(
					'Insert Special Character',
					'insert-special-characters'
				) }
				onClose={ () => {
					onChange( toggleFormat( value, { type } ) );
				} }
			>
				<CharacterMap
					characterData={ characters }
					onSelect={
						// Insert the selected character and close the popover.
						( char ) => {
							onChange( insert( value, char.char ) );
						}
					}
					categoryNames={ {
						Math: __( 'Math', 'insert-special-characters' ),
						Currency: __( 'Currency', 'insert-special-characters' ),
						Punctuation: __(
							'Punctuation',
							'insert-special-characters'
						),
						Misc: __( 'Misc', 'insert-special-characters' ),
						Greek: __( 'Greek', 'insert-special-characters' ),
						Latin: __( 'Latin', 'insert-special-characters' ),
						Arrows: __( 'Arrows', 'insert-special-characters' ),
					} }
					categoriesLabelText={ __(
						'Categories',
						'insert-special-characters'
					) }
					characterListLabelText={ __(
						'Character List',
						'insert-special-characters'
					) }
					filterLabelText={ __(
						'Filter',
						'insert-special-characters'
					) }
					key="charmap"
				/>
			</Popover>
		);

		return (
			<>
				<BlockControls>
					<Toolbar>
						<IconButton
							icon="editor-customchar"
							label={ character }
							className={ `toolbar-button-with-text toolbar-button__advanced-${ name }` }
							onClick={ onToggle }
						/>
					</Toolbar>
				</BlockControls>
				{ specialPopover }
			</>
		);
	},
} );
