---
title: "The first static page"
layout: layouts/base.liquid
templateEngine: liquid,md
---

## Alpine Test
  <div>
    <div>
      <span class="text-change">Good design</span><br/>
      <span class="change">is<br/>as little design<br/>as possible</span><br/>
      <span x-data="{message:'🤖 Hello World 🤓'}" x-text="message"></span>
    </div>
  </div>
  
 ## Tailwind/Windi CSS Test 
  
<h1 class="text-3xl font-bold underline">Hello world!</h1>


<ul>
  {% for post in search.pages("about") %}
  <li>{{ post.data.title }}</li>
  {% endfor %}
</ul>



# {{ home.first.title }}

{{ home.first.content | liquid }}

# {{ home.second.title }}

{{ home.second.content | liquid 
}}
