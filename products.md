---
layout: page
title: "Products"

---

<ul>
	{% for shoppro in site.shoppro %}
		<li>
			<a href="{{ shoppro.url }}">{{ shoppro.title }} </a>
			- {{ shoppro.headline }}
		</li>
	{% endfor %}
</ul>
