import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const sonnetsDirectory = path.join(process.cwd(), 'sonnets')

export function getSortedSonnets(dir) {
	const fileNames = fs.readdirSync(`${sonnetsDirectory}/${dir}`)
	const allSonnetsData = fileNames.map((fileName) => {
		// Remove ".md" from file name to get id
		const id = fileName.replace(/\.md$/, '')

		// Read markdown file as string
		const fullPath = path.join(`${sonnetsDirectory}/${dir}`, fileName)
		const fileContents = fs.readFileSync(fullPath, 'utf8')

		// Use gray-matter to parse the sonnet metadata section
		const matterResult = matter(fileContents)

		// Combine the data with the id
		return {
			id,
			...matterResult.data,
		}
	})
	// Sort sonnets by id
	return allSonnetsData.sort((a, b) => {
		if (parseInt(a.id) < parseInt(b.id)) {
			return -1
		} else {
			return 1
		}
	})
}

export function getSonnetsIds(dir) {
	const fileNames = fs.readdirSync(`${sonnetsDirectory}/${dir}`)
	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.md$/, ''),
			},
		}
	})
}

export async function getSonnet(dir, id) {
	const fullPath = path.join(sonnetsDirectory, `${dir}/${id}.md`)
	const fileContents = fs.readFileSync(fullPath, 'utf8')

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents)

	// Use remark to convert markdown into HTML string
	const processedContent = await remark().use(html).process(matterResult.content)
	const contentHtml = processedContent.toString()

	// Combine the data with the id and contentHtml
	return {
		id,
		contentHtml,
		...matterResult.data,
	}
}
