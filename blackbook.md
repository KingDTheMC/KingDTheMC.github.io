---
layout: page
title: "The Blackbook"

---

<!--
<ul>
	{% for blackbook in site.blackbook %}
		<li>
			<a href="{{ blackbook.url }}">{{ blackbook.title }} </a>
			- {{ blackbook.headline }}
		</li>
	{% endfor %}
</ul>
-->

<center>
<table>
	{% for blackbook in site.blackbook %}
		<tr>
			<td><p>
			<a href="{{ blackbook.url }}"><img src="{{ blackbook.picture }}" width="600" height="400" title="blackbook" /> <br> <center> {{ blackbook.title }} - {{ blackbook.headline }} </center>

</a>
			
			</p></td>
		</tr>
	{% endfor %}
</table>
</center>

