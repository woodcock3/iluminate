---
layout: layouts/base.liquid
templateEngine: njk, md
---

<ul>
{% for section in search.pages("home") %}
  <li>
      {{ section.data.title }}
  </li>
{% endfor %}
</ul>

