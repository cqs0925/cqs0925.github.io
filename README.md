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
  in reverse order. Set `venue` for the displayed conference or journal and
  optional `links` for resources such as code or data. Use `topics` with
  `motion`, `healthcare`, or `sustainability` for the publication filters.
- Set `image` to a PNG or animated GIF in `assets/images/papers/` to display a
  large demo beside the paper details. Include `image_width` and `image_height`
  for its original dimensions. Clicking a demo opens the full-size asset.
  Set `show_demo: false` for entries without a demo.
- Adjust the design in `assets/css/site.css`. The Source Sans 3 font is hosted
  in `assets/fonts/`, with its Open Font License included.
- Topic filtering is implemented in `assets/js/site.js`. All publications
  remain readable when JavaScript is disabled.

Build with `bundle exec jekyll build` before publishing changes to `main`.
