// Type: Module (with side-effects)

const versions = {
	quiz: {
		"Updated *": {
			link_web: 'https://jpdevaccx.github.io/JSQuiz',
			link_repo: 'https://github.com/JPDevAccX/JSQuiz',
		},
		"Original": {
			link_web: 'https://jpdevacc.github.io/JSQuiz',
			link_repo: 'https://github.com/JPDevAcc/JSQuiz',
		}
	},
	cipher: {
		"Updated *": {
			link_web: 'https://jpdevaccx.github.io/JSCipher',
			link_repo: 'https://github.com/JPDevAccX/JSCipher',
		},
		"Original": {
			link_web: 'https://jpdevacc.github.io/JSCipher',
			link_repo: 'https://github.com/JPDevAcc/JSCipher',
		}
	},
	socialcards: {
		"Updated *": {
			link_web: 'https://jpdevaccx.github.io/ReactSocialGroupProject',
			link_repo: 'https://github.com/JPDevAccX/ReactSocialGroupProject',
		},
		"Original": {
			link_web: 'https://jpdevacc.github.io/ReactSocialDeployment',
			link_repo: 'https://github.com/JPDevAcc/ReactSocialGroupProject',
		}
	},
	fitness: {
		"Updated *": {
			link_web_frontend: 'https://jpdevx-fitness-app.onrender.com',
			link_repo_frontend: 'https://github.com/JPDevAccX/fitness-app',
			link_repo_backend: 'https://github.com/JPDevAccX/fitness-backend'
		},
		"Original": {
			link_web_frontend: 'https://jpdev-fitness-app.onrender.com',
			link_repo_frontend: 'https://github.com/JPDevAcc/fitness-app',
			link_repo_backend: 'https://github.com/JPDevAcc/fitness-backend'
		}
	}
}

for (const [page, pageVersions] of Object.entries(versions)) {
	const mainLinksContainer = document.getElementById(page + '_main_links') ;
	if (mainLinksContainer) {
		mainLinksContainer.classList.remove('d-none') ;
		const selectEl = document.getElementById('main_links_select_version') ;
		selectEl.addEventListener('change', (e) => updateLinks(pageVersions[e.target.value])) ;
		for (const versionName of Object.keys(pageVersions)) {
			const optEl = document.createElement('option') ;
			selectEl.appendChild(optEl) ;
			optEl.innerHTML = versionName ;
		}
	}
}

function updateLinks(links) {
	for (const [linkDomId, linkURL] of Object.entries(links)) {
		const linkEl = document.getElementById(linkDomId) ;
		linkEl.href = linkURL ;
		linkEl.classList.remove('scale-to-100pc') ;
		linkEl.classList.add('scale-80pc') ;
		setTimeout(() => {
			linkEl.classList.remove('scale-80pc') ;
			linkEl.classList.add('scale-to-100pc') ;
		}, 10) ;
	}
}