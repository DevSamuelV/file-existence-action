# secret-existence-action

> GitHub Action to check for file existence

![build-test](https://github.com/andstor/file-existence-action/workflows/build/badge.svg)

This is a GitHub Action to check for existence of files. It can be used for conditionally running workflow steps based on file(s) existence. 

## Usage

The following example [workflow step](https://help.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow) will check for existence of the files: `package.json`, `LICENSE`, `README.md`, `foo` `bar`

```yml
- name: "Check file existence"
  uses: devsamuelv/secret-existence@v1
  with:
    files: "package.json, LICENSE, README.md, foo, bar"
```

## Options ⚙️

The following input variables options can/must be configured:

|Input variable|Necessity|Description|Default|
|----|----|----|----|
|`files`|Required|Comma separated string with paths to files and directories to check for existence.||
|`secret_exists`|Optional|Makes the Action fail on missing files.|`false`|

## Outputs
- `secret_exists`: Outputs `true` if the file(s) exists, otherwise `false`.

## Example

```yml
name: "File existence check"

on: [push, pull_request]

jobs:
  file_existence:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v1

      - name: Check file existence
        id: check_files
        uses: devsamuelv/secret-existence@v1
        with:
          files: "package.json, LICENSE, README.md"
```

## License

Copyright © 2020 [André Storhaug](https://github.com/andstor)

secret-existence-action is licensed under the [MIT License](https://github.com/andstor/file-existence-ation/blob/master/LICENSE).
