import { RouteReuseStrategy, DetachedRouteHandle, ActivatedRouteSnapshot } from '@angular/router'

export class CacheRouteStrategy implements RouteReuseStrategy {
  storedRouteHandles = new Map<String, DetachedRouteHandle>()

  // 需要缓存的路由路径
  allowRetriveCache = {
    ':tag': true
  }

  shouldReuseRoute(curr: ActivatedRouteSnapshot, next: ActivatedRouteSnapshot): boolean {
    if (this.getPath(curr) === ':tag/:id' && this.getPath(next) === ':tag') {
      this.allowRetriveCache[':tag'] = true
    } else {
      this.allowRetriveCache[':tag'] = false
    }
    return curr.routeConfig === next.routeConfig
  }

  // 路由进入之前执行的回调
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return this.storedRouteHandles.get(this.getPath(route)) as DetachedRouteHandle
  }

  // 路由进入之前是否需要执行回调
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    const path = this.getPath(route)
    if (this.allowRetriveCache[path]) {
      return this.storedRouteHandles.has(this.getPath(route))
    }

    return false
  }

  // 路由离开时是否需要执行回调
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    const path = this.getPath(route)
    if (this.allowRetriveCache.hasOwnProperty(path)) {
      return true
    }
    return false
  }

  // 路由离开时执行的回调
  store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void {
    this.storedRouteHandles.set(this.getPath(route), detachedTree)
  }

  private getPath(route: ActivatedRouteSnapshot): string {
    if (route.routeConfig !== null && route.routeConfig.path !== null) {
      return route.routeConfig.path
    }
    return ''
  }
}
