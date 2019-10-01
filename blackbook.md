---
layout: page
title: "The Blackbook"

---

<ul>
	{% for blackbook in site.blackbook %}
		<li>
			<a href="{{ blackbook.url }}">{{ blackbook.title }} </a>
			- {{ blackbook.headline }}
		</li>
	{% endfor %}
</ul>
