# cqs0925.github.io

Qiushuo Cheng's academic website, built with [Jekyll](https://jekyllrb.com/)
and a custom responsive design. Published with GitHub Pages.

## Run locally

```sh
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.

## Update content

- Edit the biography in `index.html` and profile details in `_config.yml`.
- Add publications to `_data/papers.yml`, oldest first. The page displays them
  in reverse order. Use `year`, `short_venue`, and optional `status` for the
  publication labels, and optional `links` for resources such as code or data.
- Add research illustrations to `assets/images/papers/`.
- Adjust the design in `assets/css/site.css`; no JavaScript or external fonts
  are required.

Build with `bundle exec jekyll build` before publishing changes to `main`.
