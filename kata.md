---
layout: page
title: Kata

---


<center>
<table>
	{% for kata in site.kata %}
		<tr>
			<td><p>
			<a href="{{ kata.url }}"><img src="{{ kata.picture }}" width="600" height="400" title="Kata" /> <br> <center> {{ kata.title }} - {{ kata.headline }} </center>

</a>
			
			</p></td>
		</tr>
	{% endfor %}
</table>
</center>

