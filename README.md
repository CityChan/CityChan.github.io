# Huancheng Chen's website

Personal academic homepage built with Jekyll and hosted on GitHub Pages.

## Updating content

- `_data/main_info.yaml`: name, role, location, portrait, and social links.
- `_data/publications.yaml`: papers and resource links. Set `year` to the publication year (or preprint year for arXiv-only papers); the homepage groups papers by this value. Keep `venue: "arxiv"` for preprints so the publication filters work.
- `_data/experience.yaml`: work and education. Use `category: "work"` or `category: "school"`.
- `index.html`: biography, research interests, news, teaching, service, and skills.
- `beyond.html`: personal interests and album collection.
- `assets/cv/`: CV and research statement PDFs.

## Layout and appearance

The shared layout is in `_layouts/default.html`, styles in `libs/custom/my_css.css`, and navigation and publication filters in `libs/custom/my_js.js`.

The site uses a single warm, light palette inspired by [Microsoft AI Careers](https://microsoft.ai/careers/), with cream backgrounds and brown-gray text. Papers and news remain available without JavaScript. Existing section anchors, including `#bio`, `#research`, `#publications`, and `#resume`, remain supported.

With Jekyll installed, run `jekyll serve` to preview locally. GitHub Pages builds and publishes the site from the root of `master`. Check the Pages deployment after pushing.

## Credits

The original site was based on [Martin Saveski's template](https://web.stanford.edu/~msaveski/).

Existing libraries include Skeleton, Normalize.css, Font Awesome, Academicons, and jQuery.
