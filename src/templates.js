import { col, row } from './utils'



function title(block) {
	//const tag = block.options.tag
	//const styles = block.options.styles
	const { tag, styles } = block.options

	return row(col(`
		<${tag}>${block.value}</${tag}>
	`), styles)
}

function text(block) {
	const { styles } = block.options
	return row(col(`
		<p style="margin-bottom: 0;">${block.value}</p>
	`), styles)
}

function textColumns(block) {
	const { styles } = block.options
	const html = block.value.map(item => col(item))
	return row(html.join(''), styles)
}

function image(block) {
	const { alt, styles, imageStyles } = block.options
	const html = `<img src="${block.value}" alt="${alt}" style="${imageStyles}">`
	return row(col(html), styles)
}

export const templates = { title, text, textColumns, image }