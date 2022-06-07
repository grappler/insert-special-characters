const { registerFormatType, toggleFormat, insert } = wp.richText;
const { Fragment } = wp.element;
const { BlockControls, RichTextShortcut } = wp.blockEditor;
const { Popover, ToolbarButton, ToolbarGroup } = wp.components;
const { getRectangleFromRange } = wp.dom;
const { applyFilters } = wp.hooks;
const { displayShortcut } = wp.keycodes;
const { __ } = wp.i18n;

import { CharacterMap } from 'react-character-map';
import './insert-special-characters.css';

// Load the default Chars provided by react-character-map component.
import Chars from '../node_modules/react-character-map/dist/component/chars.json';

const InsertSpecialCharactersOptions = {
	name: 'insertspecialcharacters',
	title: __( 'Special Characters', 'insert-special-characters' ),
	character: 'o',
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
			/**
			 * @see https://github.com/10up/insert-special-characters/issues/115
			 * to know more about reasons behind the following computation.
			 */
			const rangeSelectionRect = getRectangleFromRange( anchorRange );
			const rangeSelectionRectCenterX =
				rangeSelectionRect.x + rangeSelectionRect.width / 2;

			const editorViewportEl = document.querySelector(
				'.interface-interface-skeleton__content'
			);
			const editorViewportRect = editorViewportEl.getBoundingClientRect();

			/**
			 * The width of the charmap is 550px, so we use 550/2 = 275
			 * as the popover opens from the horizontal center.
			 */
			const canCharMapOverflowOnLeft =
				275 > rangeSelectionRectCenterX - editorViewportRect.x;
			const canCharMapOverflowOnRight =
				275 > editorViewportRect.right - rangeSelectionRectCenterX;

			/**
			 * The value 30 is an additional offset.
			 * For some reason, Popover uses React.x - 24px instead of the
			 * exact value. The value 30 is provided to add 24 + some empty space.
			 */
			if ( canCharMapOverflowOnLeft ) {
				rangeSelectionRect.x = editorViewportRect.x + 30;
			}

			if ( canCharMapOverflowOnRight ) {
				rangeSelectionRect.x = editorViewportRect.right - 275 - 30;
			}

			return rangeSelectionRect;
		};
		const characters = applyFilters( `${ name }-characters`, Chars );
		// Display the character map when it is active.
		const specialCharsPopover = isActive && (
			<Popover
				className="character-map-popover"
				position="bottom center"
				focusOnMount="firstElement"
				key="charmap-popover"
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
						Music: __( 'Music', 'insert-special-characters' ),
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
			<Fragment>
				<BlockControls group="other">
					<ToolbarGroup>
						<ToolbarButton
							className={ `toolbar-button-with-text toolbar-button__advanced-${ name }` }
							icon="editor-customchar"
							isPressed={ isActive }
							label={ title }
							onClick={ onToggle }
							shortcut={ displayShortcut.primary( character ) }
						/>
					</ToolbarGroup>
				</BlockControls>
				<Fragment>
					<RichTextShortcut
						type="primary"
						character={ character }
						onUse={ onToggle }
					/>
				</Fragment>
				{ specialCharsPopover }
			</Fragment>
		);
	},
} );
