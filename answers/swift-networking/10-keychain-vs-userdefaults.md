# Keychain — storing refresh tokens; what not to put in UserDefaults?

**Target time:** 30–45 seconds

---

## Talk track

> **Keychain** — encrypted storage for **secrets**: refresh/access tokens, passwords, API keys, crypto keys. Survives app reinstall depending on **accessibility** (`kSecAttrAccessibleWhenUnlockedThisDeviceOnly` common).
>
> **UserDefaults** — plist, **not encrypted**; fine for flags, last tab, onboarding seen, non-sensitive prefs.
>
> **Never UserDefaults:** auth tokens, PII, health/financial identifiers, session cookies.
>
> **Wrap Keychain** in `KeychainService` protocol — easier testing and token migration.
>
> Same as httpOnly cookies vs localStorage on web.

---

## Code

```swift
protocol SecureStore {
    func save(_ data: Data, key: String) throws
    func load(key: String) throws -> Data?
    func delete(key: String) throws
}

final class KeychainSecureStore: SecureStore {
    func save(_ data: Data, key: String) throws {
        let query: [String: Any] = [
            kSecClass as String: kSecClassGenericPassword,
            kSecAttrAccount as String: key,
            kSecValueData as String: data
        ]
        SecItemDelete(query as CFDictionary)
        let status = SecItemAdd(query as CFDictionary, nil)
        guard status == errSecSuccess else { throw KeychainError.saveFailed }
    }
}
```

---

## Avoid

- Logging token values in debug prints
- iCloud Keychain sync for highly sensitive tokens without threat model review
