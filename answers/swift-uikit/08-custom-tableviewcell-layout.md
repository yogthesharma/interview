# Custom UITableViewCell layout — constraints vs manual frames?

**Target time:** 30 seconds

---

## Talk track

> **Auto Layout constraints** (or `UIStackView`) — default choice: rotation, Dynamic Type, multi-line labels, accessibility sizes. Set `contentView` constraints, `translatesAutoresizingMaskIntoConstraints = false`.
>
> **Manual frames** — rare: extreme scroll performance micro-optimization, custom drawing in `draw(_:)`, legacy code. Harder to maintain with Dynamic Type.
>
> **Self-sizing cells:** estimated row height + proper vertical constraints chain to `contentView`; `tableView.rowHeight = UITableView.automaticDimension`.
>
> **Prepare for reuse:** override `prepareForReuse()` — cancel image loads, reset text.

---

## Code

```swift
final class OrderCell: UITableViewCell {
    private let titleLabel = UILabel()

    override init(style: UITableViewCell.CellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
        titleLabel.translatesAutoresizingMaskIntoConstraints = false
        contentView.addSubview(titleLabel)
        NSLayoutConstraint.activate([
            titleLabel.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 16),
            titleLabel.trailingAnchor.constraint(equalTo: contentView.trailingAnchor, constant: -16),
            titleLabel.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 8),
            titleLabel.bottomAnchor.constraint(equalTo: contentView.bottomAnchor, constant: -8)
        ])
    }

    required init?(coder: NSCoder) { fatalError() }
}
```

---

## Avoid

- Hardcoded `frame` heights with multi-line Dynamic Type text
- Layout in `layoutSubviews` without calling `super` first
