---
layout: layouts/sectioned-page.liquid
templateEngine: liquid, md
---

<ul>
{% for section in search.pages("home") %}
  <li>
      {{ section.title }}
  </li>
{% endfor %}
</ul>

