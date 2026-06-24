# Paleisk po: gh auth login
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

$repos = @(
  @{ path = "c:\Users\eve\Desktop\projektai\3perdarytasdarbas"; name = "3perdarytasdarbas"; desc = "Android nuotrauku redaktorius" },
  @{ path = "c:\Users\eve\Desktop\projektai\kmi-skaiciuokle\app"; name = "kmi-skaiciuokle"; desc = "Android KMI skaiciuokle" },
  @{ path = "c:\Users\eve\Desktop\projektai\vizitine-kortele\2nd sc\2nd kodas"; name = "vizitine-kortele"; desc = "Android vizitine kortele" },
  @{ path = "c:\Users\eve\Desktop\projektai\aplikacija"; name = "arcgis-zemelapis"; desc = "ArcGIS Lietuvos miestu zemelapis" },
  @{ path = "c:\Users\eve\Desktop\projektai\babylon-3d-scena"; name = "babylon-3d-scena"; desc = "Babylon.js 3D scena (index.html)" }
)

gh auth status 2>$null
if ($LASTEXITCODE -ne 0) {
  Write-Host "Prisijunk: gh auth login"
  exit 1
}

foreach ($r in $repos) {
  Write-Host "`n=== $($r.name) ==="
  gh repo view "ievavaineikyte-ctrl/$($r.name)" 2>$null
  if ($LASTEXITCODE -ne 0) {
    gh repo create "ievavaineikyte-ctrl/$($r.name)" --public --description $r.desc --source $r.path --remote origin --push
  } else {
    git -C $r.path push -u origin main
  }
}

Write-Host "`nBaigta!"
