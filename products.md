---
layout: page
title: "Products"

---

<center>
<table>
	{% for shoppro in site.shoppro %}
		<tr>
			<td><p>
			<a href="{{ shoppro.url }}"><img src="{{ shoppro.picture }}" width="300" height="400" title="King D Logo T" /> <br> <center> {{ shoppro.title }} - {{ shoppro.headline }} </center>

</a>
			
			</p></td>
		</tr>
	{% endfor %}
</table>
</center>
